function formatName(userSubmssion) {  
    
    if (typeof userSubmssion === "number") {
        return userSubmssion;
    } 
    
    let formatted = userSubmssion.toLowerCase();
    console.log(formatted);

    if (userSubmssion === "dudunsparce") {
        formatted = 982;

    } else if (userSubmssion === "type: null" || userSubmssion === "type null" || userSubmssion === "type:null") {
        formatted = 772;

    } else {
        formatted = userSubmssion;
    }
    
    return formatted;
}

export default formatName;
