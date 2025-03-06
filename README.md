Example of changing data in record
```javascript
 $.ajax({
    	type: 'POST',
        url: `https://leaf.va.gov/VBA/RPM/VICTOR/api/form/${recordID}`,
        dataType: 'json',
        data: {
                CSRFToken: '<!--{$CSRFToken}-->',
                 9: dbData.comp, // compRating
                10: dbData.edu,
            	11: dbData.vre,
            	12: dbData.ins,
            	13: dbData.lgy,
            	14: dbData.vha,
            	15: dbData.nca,
                //dependencyID: 9,       // This is the ID for the requirement within the workflow's step
              //actionType: 'UpdateandSave',  // This is a unique ID for the action. Confirm by checking the action in the workflow: "...clicks [actionType]"
              //  9: dbData.comp, // compRating

        },
        success: function(response) {
        	/*const letRecordID = parseFloat(response)
	
    /*      if(!isNaN(letRecordID)) && isFinite(letRecordID)) && letRecordID) != 0) {
        	//window.location = 'index.php?a=view&recordID=' + recordID;
           // main();
        	}
        	else {
        		alert(response + '\n\nPlease contact your system administrator.');
        	} */  
        },
        cache: false
    });   
    
}    

```
