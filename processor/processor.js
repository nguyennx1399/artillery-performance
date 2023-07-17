
module.exports = {
    beforeRequestHandler(req, ctx, ee, next) {
        req.headers = headers;
        return next();
    },
    afterResponseHandler(req, res, ctx, ee, next) {
        console.log(res.body);
        return next();
    },
    addMultipartFormData: function (requestParams, context, ee, next) {
        const form = new FormData();
        form.append('files', fs.createReadStream(__dirname + '/test.jpg'));
        requestParams.body = form;
        return next();
    },
    query(ctx, events, done) {
        return done();
    },
};

const headers = {
    authority: "instant-api-dev.gempages.xyz",
    accept: "*/*",
    "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/json",
    origin: "https://instant-dev.gempages.xyz",
    pragma: "no-cache",
    referer: "https://instant-dev.gempages.xyz/",
    "sec-ch-ua":
        '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    "x-gemx-shop-id": "451729230607155853",
    authorization:
        `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY5Njc5MTUsImp0aSI6IjQ0Nzc4NDA0NDU5MjEwNDQzOCIsImlhdCI6MTY4Njg4MTUxNSwiaXNzIjoiZ2VteCJ9.1KCZVAVP3p5JZKPONc8xGC78VVYU1a3iBAgW2LZAy1I`,

};
