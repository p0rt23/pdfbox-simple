import PDFBox from "pdfbox-simple";

const pdfbox = new PDFBox();
let response = await pdfbox.exec("ExtractText", "-console", "sample.pdf");
console.log(response.stdout);

