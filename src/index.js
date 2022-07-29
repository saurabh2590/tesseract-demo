const Tesseract = require('tesseract.js');

const fileName = process.argv[2];

const recognize = async (file) => {
    const {data: {text}} = await Tesseract.recognize(
        file,
        'eng',
    //{logger: m => console.log(m)}
    );
    return text.trim()
}

recognize(fileName).then((result) => console.log(result))
