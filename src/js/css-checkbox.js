var CssCheckbox = function () {};



CssCheckbox.convert = function(className) {
    'use strict';
    
    console.log('CssCheckbox!');
    
    console.log('Converting all classes with class name: ' + className + '...');
    
    if (!className) {
    
        console.log('CssCheckbox: Please provide a class name!');
        
    } else {
        
        var CssCheckboxObjs;
        CssCheckboxObjs = document.getElementsByClassName(className);
        
        this.transform(CssCheckboxObjs);
        
    }
   
};



CssCheckbox.transform = function(objs) {
    'use strict';
    
    if (objs.length > 0) {
        
        for (var i = 0; i < objs.length; i++) { 
        
            console.log(objs[i]);
            console.log(objs[i].dataset);
            var checkedClass = '';
            
            if (objs[i].getAttribute('checked')) {
                checkedClass = this.findCssOn(objs[i]);
            }
            
            objs[i].className = objs[i].className + ' ' + 'css-checkbox-' + i;
            
            objs[i].outerHTML = '<div id="css-checkbox-container-' + i + '" class="css-checkbox-core ' + this.findCssOff(objs[i]) + ' ' + checkedClass + '">' + objs[i].outerHTML + '</div>';
                
            this.addListener(i);            
            
        }        

    }    
    
};



CssCheckbox.addListener = function(CssCheckboxId) {
    'use strict';
    
    this.bindCheckboxChangeEvent(CssCheckboxId);
    this.bindCheckboxClickEvent(CssCheckboxId);

};



CssCheckbox.bindCheckboxClickEvent = function(CssCheckboxId) {
    'use strict';    
    
    var thisIsChecked;
    var thisCssCheckbox;    
    
    document
        .getElementById('css-checkbox-container-' + CssCheckboxId)
        .addEventListener('click', function() {
    
            thisIsChecked = document.getElementsByClassName('css-checkbox-' + CssCheckboxId)[0].getAttribute('checked');
            thisCssCheckbox = document.getElementsByClassName('css-checkbox-' + CssCheckboxId)[0];
            
            if (thisIsChecked) {
                thisCssCheckbox.removeAttribute('checked');
                document
                    .getElementById('css-checkbox-container-' + CssCheckboxId).className = 'css-checkbox-core ' + CssCheckbox.findCssOff(thisCssCheckbox);                
            } else {
                thisCssCheckbox.setAttribute('checked', 'checked');
                document
                    .getElementById('css-checkbox-container-' + CssCheckboxId).className = 'css-checkbox-core ' + CssCheckbox.findCssOff(thisCssCheckbox) + ' ' + CssCheckbox.findCssOn(thisCssCheckbox);
            }
       
    });    
    
};



CssCheckbox.bindCheckboxChangeEvent = function(CssCheckboxId) {
    'use strict';    
    
    var thisIsChecked;
    var thisCssCheckbox;    
    
    document
        .getElementById('css-checkbox-container-' + CssCheckboxId)
        .onchange = function() {
            
            thisIsChecked = document.getElementsByClassName('css-checkbox-' + CssCheckboxId)[0].checked;
            thisCssCheckbox = document.getElementsByClassName('css-checkbox-' + CssCheckboxId)[0];
            
            if (thisIsChecked) {
                thisCssCheckbox.removeAttribute('checked');
                document
                    .getElementById('css-checkbox-container-' + CssCheckboxId).className = 'css-checkbox-core ' + CssCheckbox.findCssOff(thisCssCheckbox);                
            } else {       
                thisCssCheckbox.setAttribute('checked', 'checked');
                document
                    .getElementById('css-checkbox-container-' + CssCheckboxId).className = 'css-checkbox-core ' + CssCheckbox.findCssOff(thisCssCheckbox) + ' ' + CssCheckbox.findCssOn(thisCssCheckbox);
            }
       
    };       
    
};



CssCheckbox.findCssOff = function(obj) {
    'use strict';
        
    if (obj) {
        
        var cssOff = obj.getAttribute('data-css-off');
        
        if (cssOff) {
        
            return cssOff;
            
        } else {
            
            return 'css-checkbox-container';
            
        }
        
    }
    
};



CssCheckbox.findCssOn = function(obj) {
    'use strict';
        
    if (obj) {
        
        var cssOn = obj.getAttribute('data-css-on');
        
        if (cssOn) {

            return cssOn;
            
        } else {
            
            return 'css-checkbox-container-checked';
            
        }
        
    }
    
};
