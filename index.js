var fs = require('fs');
require('dotenv').load();
var async = require('async');
var pdf = require('pdfcrowd');
var archiver = require('archiver');

var pdf_username = process.env.PDF_USERNAME;
var pdf_key = process.env.PDF_KEY;

var output_prefix = (__dirname + '/example');
var zip_path = output_prefix + '.zip';
var pdf_path = output_prefix + '.pdf';

var archive = archiver.create('zip', {});
var output = fs.createWriteStream(zip_path);

archive.pipe(output);
archive.glob('example/**');

archive.on('end', function () {
  var client = new pdf.Pdfcrowd(pdf_username, pdf_key);
  client.convertFile(zip_path, pdf.saveToFile(pdf_path));
});

archive.finalize(function (err, bytes) {
  if (err) {
    console.error('err');
  }
});