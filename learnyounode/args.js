console.log(process.argv.reduce((prev, item) => {
    if(Number.isNaN(Number(item))){
        return prev;
    } else{
        return Number(item) + prev;
    }
},0))