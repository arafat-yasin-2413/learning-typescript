## How to Start working in TypeScript?

-- Install nvm (Node Version Manager)

Step 1 : Install TypeScript Globally
    command : npm install -g typescript 
    This will also provide Typescript's Compiler (tsc)
    Now check the compiler version: command : tsc -v

    Now run : tsc [file-name].ts --> it will create a js file

Step 2 : Now we need to configure typescript (tsconfig.js)
    command : tsc --init 
    it will create a tsconfig.js file


    in the tsconfig file : 
    We have 2 module system (esm module, commonjs)
    এখানে বাই ডিফল্ট "nodenext" থাকে । যাতে করে আমরা ২ টা মডিউলার সিস্টেম ই ব্যবহার করতে পারি। 

    target হিসেবে আমরা latest "esnext" ব্যবহার করতেছি।

    ** Now we should uncomment "rootDir" & outDir
    ekhane bole rakha valo: 
    "src" folder a amra ts file gula rakhbo. 

    ar js file gula src er baire rakhbo. eikhane "dist" er moddhe thakbe

    ** ekhon "tsc" command dile dist naam a ekta folder toiri hobe. 



TypeScript Basic : 

i) primitive : string, number, boolean
ii) non-primitive : array, object
    Non-primitive টাইপ গুলোকে Reference type ও বলা হয়।


** Optional type : using a "?"
** Literal type : Jokhon value nijei type hishebe boshe
** readonly type