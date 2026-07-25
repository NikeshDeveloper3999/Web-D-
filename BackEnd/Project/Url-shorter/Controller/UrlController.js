const shortid = require('shortid');
const url = require('../Models/UserModel')


async function handleGenerateUrl(req, res) {
    const body = req.body
    if(!body.url ) return res.status(404).json({message: "URL is required"})
    const shortID = shortid.generate();
await url.create({
    ShortId : shortID,
    redirectUrl: body.url   ,
    visitHistory: []
})

return res.json({id : shortID})

}



async function geturl (req, res){
try{
const shortUrl = await url.findOneAndUpdate(
    { ShortId: req.params.shortId },
    {
        $push: {visithistory: {timeStamp: Date.now()
            }
        }
    },
    { new: true }
);

if (!shortUrl) {
    return res.status(404).json({
        message: "Short URL not found"
    });
}

res.redirect(shortUrl.redirectUrl);
}
catch(err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
}
}

async function handleGetAAnalytics(req, res) {

const shortId = req.params.shortId;
const entry = await url.findOne({ ShortId: shortId });
return res.json(  
    {
        totalclick: entry.visithistory.length,
        analytics : entry.visithistory 
    }
);}



module.exports = { handleGenerateUrl , geturl  , handleGetAAnalytics}
