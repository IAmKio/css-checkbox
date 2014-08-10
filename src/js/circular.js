Circular = function () {};



Circular.convert = function(className) {
    'use strict';
    
    console.log('Circular!');
    
    console.log('Converting all classes with class name: ' + className + '...');
    
    if (!className) {
    
        console.log('Circular: Please provide a class name!');
        
    } else {
        
        var circularObjs;
        circularObjs = document.getElementsByClassName(className);
        
        this.transform(circularObjs);
        
    }
   
};



Circular.transform = function(objs) {
    'use strict';
    
    if (objs.length > 0) {
        
        for (var i = 0; i < objs.length; i++) { 
        
            console.log(objs[i]);
            console.log(objs[i].dataset);
            var checkedClass = '';
            
            if (objs[i].getAttribute('checked')) {
                checkedClass = this.findCssOn(objs[i]);
            }
            
            objs[i].className = objs[i].className + ' ' + 'circular-' + i;
            
            objs[i].outerHTML = '<div id="circular-container-' + i + '" class="circular-core ' + this.findCssOff(objs[i]) + ' ' + checkedClass + '">' + objs[i].outerHTML + '</div>';
                
            this.addListener(i);            
            
        }        

    }    
    
};



Circular.addListener = function(circularId) {
    'use strict';
    
    var thisIsChecked;
    var thisCircular;

    document
        .getElementById('circular-container-' + circularId)
        .addEventListener('click', function() {
    
            thisIsChecked = document.getElementsByClassName('circular-' + circularId)[0].getAttribute('checked');
            thisCircular = document.getElementsByClassName('circular-' + circularId)[0];
            
            if (thisIsChecked) {
                thisCircular.removeAttribute('checked');
                document
                    .getElementById('circular-container-' + circularId).className = 'circular-core ' + Circular.findCssOff(thisCircular);                
            } else {
                thisCircular.setAttribute('checked', 'checked');
                document
                    .getElementById('circular-container-' + circularId).className = 'circular-core ' + Circular.findCssOff(thisCircular) + ' ' + Circular.findCssOn(thisCircular);
            }
       
    });

};



Circular.findCssOff = function(obj) {
    'use strict';
        
    if (obj) {
        
        var cssOff = obj.getAttribute('data-css-off');
        
        if (cssOff) {
            // console.log('Found CSS Off:' + cssOff);
            return cssOff;
            
        } else {
            
            return 'circular-container';
            
        }
        
    }
    
};



Circular.findCssOn = function(obj) {
    'use strict';
        
    if (obj) {
        
        var cssOn = obj.getAttribute('data-css-on');
        
        if (cssOn) {
            // console.log('Found CSS On:' + cssOn);
            return cssOn;
            
        } else {
            
            return 'circular-container-checked';
            
        }
        
    }
    
};
