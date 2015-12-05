#pdfcrowd example

Example of using pdfcrowd for generating a PDF with external resources


## To run example
Add .env file with the following key pairs
- ``PDF_USERNAME``
- ``PDF_KEY``

Install package prerequisites and then run the test command

```
npm install
npm test
```

You will now have two new files in the root of the project

```
> ls -l example.*
-rw-r--r--  1 user  staff  17504  5 Dec 16:19 example.pdf
-rw-r--r--  1 user  staff   2327  5 Dec 16:22 example.zip
```