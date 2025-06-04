how to make pages with from anysite 
```javascript

query.setRootURL('URL');
```

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
                const letRecordID = parseFloat(response)
                console.log(letRecordID);
                },
            error: function(xhr, status, error) {
                console.log('Error:', status, error);                 
            }
        });  

    }      
    

```
Example of starting new request

```JavaScript
 $.ajax({
    	type: 'POST',
        url: 'https://leaf.va.gov/VBA/335/stpaul_finance_request/api/?a=form/new',
        dataType: 'json',
        data: {service: '', // Either a service ID # or leave blank
                  title: 'From Modal Test', // Arbitrary title for the request
                  priority: 0,
                  numform_5e189: 1, // Form ID is listed in the form editor
                 CSRFToken: '<!--{$CSRFToken}-->',
                  6: reqData.userInit, // requester Name 
                  
        },
        success: function(response) {
        	const letRecordID = parseFloat(response);
       
	
    /*      if(!isNaN(letRecordID)) && isFinite(letRecordID)) && letRecordID) != 0) {
        	//window.location = 'index.php?a=view&recordID=' + recordID;
         
        	}
        	else {
        		alert(response + '\n\nPlease contact your system administrator.');
        	} */
        },
        cache: false
    });   
    
}
```

Example of submit record

```javaScript
$.ajax({
            type: 'POST',
            url: "https://leaf.va.gov/VBA/RPM/VICTOR/api/form/" + getRecordID + "/submit",
            data: {
                CSRFToken: '<!--{$CSRFToken}-->',
                //dependencyID: 21,       // This is the ID for the requirement within the workflow's step
                //stepID: 0,
               //actionType: 'Requestor clicks submit',  // This is a unique ID for the action. Confirm by checking the action in the workflow: "...clicks [actionType]"
               // comment: 'No Action Needed'
            },
  			success: function(response) {

            },
  			error: function(xhr, status, error) {
            console.log('Error:', status, error);                 
            }
            });  
   
}      


```
push record to diffrent step

```javaScript
$.ajax({
            type: 'POST',
            url: `./api/formWorkflow/${getRecordID}/apply`,
            data: {
                CSRFToken: '<!--{$CSRFToken}-->',
                dependencyID: 21,       // This is the ID for the requirement within the workflow's step
                actionType: 'NoActionNeeded',  // This is a unique ID for the action. Confirm by checking the action in the workflow: "...clicks [actionType]"
                comment: comment
            },
  			success: function(response) {
            console.log('Success:', response);
             $('#tr' + getRecordID).fadeOut();    
           // main();
            },
  			error: function(xhr, status, error) {
            console.log('Error:', status, error);                 
            }
            });  


```



