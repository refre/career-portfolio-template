/***************************************
*                Ajax.js.              *
*   Copyright 2007 Maido Production    *
*       http://www.maido-prod.com      *
*     Compatible : IE7/FF			   *
***************************************/

	function LoadenvoiRequeteAjax(url,zone_tmp,couleur_fond) {
			AfficheInnerHTML("<table width='100%' height='100%' bgcolor='"+couleur_fond+"'><tr><td align='center' valign='middle'>"+AjaxImgLoading+"</td></tr></table>",zone_tmp)
			setTimeout("envoiRequeteAjax('"+url+"','"+zone_tmp+"')", 1500);
	}

  function envoiRequeteAjax(url,zone_tmp) {

        var httpRequest = false;


        if (window.XMLHttpRequest) {  //FF
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/html;charset=iso-8859-1');
                    }
        }
        else if (window.ActiveXObject) { //IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
				httpRequest.setRequestHeader('Content-Type','text/html;charset=iso-8859-1'); 


            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
					httpRequest.setRequestHeader('Content-Type','text/html;charset=iso-8859-1'); 
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
           return false;
        }
		
        httpRequest.onreadystatechange = function() { AfficheResultatAjax(httpRequest,zone_tmp); };
        httpRequest.open('GET', url, true);
        httpRequest.send(null);

    }


    function AfficheResultatAjax(httpRequest,zone_tmp) {
		AfficheInnerHTML("",zone_tmp);
        if (httpRequest.readyState == 4) {
			if (httpRequest.status == 200) {
				 AfficheInnerHTML(Decode(httpRequest.responseText),zone_tmp)
			}
        }
    }


	function Decode(tChaine) {
	  while (true) {
		var i = tChaine.indexOf('+');
		if (i < 0) break;
		tChaine = tChaine.substring(0,i) + '%20' + tChaine.substring(i + 1, tChaine.length);
	  }
	  return unescape(tChaine)
	}


	function AfficheInnerHTML(contenu_tmp,zone_tmp) {
		if (document.getElementById) {
		
		content=document.getElementById(zone_tmp);
		}
		else {
			if (document.all) {
			content=document.all[zone_tmp];
			}
		}
		content.innerHTML  = contenu_tmp ; 
	}