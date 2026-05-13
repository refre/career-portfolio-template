/**************************************************************************
*				                language.js.     					      *
*   				 Copyright 2004 Maido Production    				  *
*      					http://www.maido-prod.com      					  *
**************************************************************************/


// Traduction des textes fixes dans les sites IZISPOT

//pour ajouter des traductions copier le pragraphe "Francais" pour creer une nouvelle langue
//renommer les variable comme suit (ici exemple du Breton, pour obtenir les deux lettres du milieu voir la table de reference en fin de fichier)
//var_br_xxxxxxx=xxxxxxxxxxxxxx
var var_fr="";
var var_fr_contact_alert="Les champs suivant sont obligatoires :\n";
var var_fr_contact_button="Envoyer les informations";
var var_fr_zoom_retour="Retour";
var var_fr_bouton_accueil_animation="Quitter l'animation";
var var_fr_nom_animation="Animation";
var var_fr_download="Télécharger";
var var_fr_media="Visionner / Ecouter";
var var_fr_referencement_ligne1="Chargement en cours...";
var var_fr_referencement_ligne2="Si rien ne se passe cliquez ici";
var var_fr_champ_formlaire="* Champs obligatoires";

var var_en_contact_alert="The fields according to are obligatory :\n";
var var_en_contact_button="Send";
var var_en_zoom_retour="Return";
var var_en_bouton_accueil_animation="Quit";
var var_en_nom_animation="Flash";
var var_en_download="Download";
var var_en_media="View / Listen ";
var var_en_referencement_ligne1="Loading in progress...";
var var_en_referencement_ligne2="If nothing happens click here";
var var_en_champ_formlaire="* Mandatory";


var var_de_contact_alert="Nachfolgende Felder müssen ausgefüllt werden :\n";
var var_de_contact_button="Informationen senden";
var var_de_zoom_retour="Zurück ";
var var_de_bouton_accueil_animation="Animation schliessen";
var var_de_nom_animation="Animation";
var var_de_download="Download";
var var_de_media="Ansehen / Anhören ";
var var_de_referencement_ligne1="Wird geladen...";
var var_de_referencement_ligne2="Sollten Sie nicht weitergeleitet werden, klicken Sie hier";
var var_de_champ_formlaire="* Obligatorische Felder";


var var_es_contact_alert="Los campos según son obligatorios :\n";
var var_es_contact_button="Enviar la información";
var var_es_zoom_retour="Vuelta ";
var var_es_bouton_accueil_animation="Dejar la animación";
var var_es_nom_animation="Animación";
var var_es_download="Cargar";
var var_es_media="Visionar / Escuchar ";
var var_es_referencement_ligne1="Cargamento en curso...";
var var_es_referencement_ligne2="Si no pasa nada pulse aquí";
var var_es_champ_formlaire="* Campos obligatorios";



var var_it_contact_alert="I campi secondo sono obbligatori :\n";
var var_it_contact_button="Inviare le informazioni";
var var_it_zoom_retour="Ritorno";
var var_it_bouton_accueil_animation="Lasciare l'animazione";
var var_it_nom_animation="Animazione";
var var_it_download="Teletrasmettere";
var var_it_media="Osservare / Ascoltare ";
var var_it_referencement_ligne1="Carico in corso...";
var var_it_referencement_ligne2="Se nulla avviene premete qui";
var var_it_champ_formlaire="* Campi obbligatori ";


var var_pt_contact_alert="Os campos de acordo com são obrigatórios :\n";
var var_pt_contact_button="Enviar as informações";
var var_pt_zoom_retour="Regresso";
var var_pt_bouton_accueil_animation="Deixar a animação";
var var_pt_nom_animation="Animação";
var var_pt_download="Fazer o download";
var var_pt_media="Visionar / Ouvir ";
var var_pt_referencement_ligne1="Carregamento em curso...";
var var_pt_referencement_ligne2="Se não se passa nada clica aqui";
var var_pt_champ_formlaire="* Campos obrigatórios";








// recuperation du langage du navigateur
var language;
language="fr";
if (navigator.language){
  language=navigator.language
}else if (navigator.userLanguage){
  language=navigator.userLanguage
}else{
  language="en"
}




// fonction de verification de l'existance d'un objet HTML
function verif_exist(obj)
{
try
	{
	if (eval("document."+obj)) return true;
	}
catch (ex)
	{
	return false;
	}
}

function verif_language(language)
{
try
	{
	if (eval('var_'+language+'_contact_button')) return true;
	}
catch (ex)
	{
	return false;
	}
}

// Fonction d'initialisation des traductions
function initialise_traduction()
{ 
	verif=verif_language(language);
	if (verif==false)
		{
		language="en"
		}
	if (verif_exist("envoi.bouton_contact")==true) document.envoi.bouton_contact.value=eval('var_'+language+'_contact_button');
	if (verif_exist("zoom_retour.retour_produit")==true) document.zoom_retour.retour_produit.value=eval('var_'+language+'_zoom_retour');
	if (verif_exist("zoom_retour.retour_produit1")==true) document.zoom_retour.retour_produit1.value=eval('var_'+language+'_zoom_retour');
	if (verif_exist("accueil_animation.bouton_accueil_animation")==true) document.accueil_animation.bouton_accueil_animation.value=eval('var_'+language+'_bouton_accueil_animation');
	
}

//fonction d'ecriture en dur
function ecrire_traduction(nom_var)
{
try
	{
	if (language=='') {language='fr';}
	if (nom_var!="") {document.write (eval('var_'+language+'_'+nom_var));}
	}
catch (ex)
	{
	return false;
	}
}
/*

AA "Afar"
AB "Abkhazian"
AF "Afrikaans"
AM "Amharic"
AR "Arabic"
AS "Assamese"
AY "Aymara"
AZ "Azerbaijani"
BA "Bashkir"
BE "Byelorussian"
BG "Bulgarian"
BH "Bihari"
BI "Bislama"
BN "Bengali" "Bangla"
BO "Tibetan"
BR "Breton"
CA "Catalan"
CO "Corsican"
CS "Czech"
CY "Welsh"
DA "Danish"
DE "German"
DZ "Bhutani"
EL "Greek"
EN "English" "American"
EO "Esperanto"
ES "Spanish"
ET "Estonian"
EU "Basque"
FA "Persian"
FI "Finnish"
FJ "Fiji"
FO "Faeroese"
FR "French"
FY "Frisian"
GA "Irish"
GD "Gaelic" "Scots Gaelic"
GL "Galician"
GN "Guarani"
GU "Gujarati"
HA "Hausa"
HI "Hindi"
HR "Croatian"
HU "Hungarian"
HY "Armenian"
IA "Interlingua"
IE "Interlingue"
IK "Inupiak"
IN "Indonesian"
IS "Icelandic"
IT "Italian"
IW "Hebrew"
JA "Japanese"
JI "Yiddish"
JW "Javanese"
KA "Georgian"
KK "Kazakh"
KL "Greenlandic"
KM "Cambodian"
KN "Kannada"
KO "Korean"
KS "Kashmiri"
KU "Kurdish"
KY "Kirghiz"
LA "Latin"
LN "Lingala"
LO "Laothian"
LT "Lithuanian"
LV "Latvian" "Lettish"
MG "Malagasy"
MI "Maori"
MK "Macedonian"
ML "Malayalam"
MN "Mongolian"
MO "Moldavian"
MR "Marathi"
MS "Malay"
MT "Maltese"
MY "Burmese"
NA "Nauru"
NE "Nepali"
NL "Dutch"
NO "Norwegian"
OC "Occitan"
OM "Oromo" "Afan"
OR "Oriya"
PA "Punjabi"
PL "Polish"
PS "Pashto" "Pushto"
PT "Portuguese"
QU "Quechua"
RM "Rhaeto-Romance"
RN "Kirundi"
RO "Romanian"
RU "Russian"
RW "Kinyarwanda"
SA "Sanskrit"
SD "Sindhi"
SG "Sangro"
SH "Serbo-Croatian"
SI "Singhalese"
SK "Slovak"
SL "Slovenian"
SM "Samoan"
SN "Shona"
SO "Somali"
SQ "Albanian"
SR "Serbian"
SS "Siswati"
ST "Sesotho"
SU "Sudanese"
SV "Swedish"
SW "Swahili"
TA "Tamil"
TE "Tegulu"
TG "Tajik"
TH "Thai"
TI "Tigrinya"
TK "Turkmen"
TL "Tagalog"
TN "Setswana"
TO "Tonga"
TR "Turkish"
TS "Tsonga"
TT "Tatar"
TW "Twi"
UK "Ukrainian"
UR "Urdu"
UZ "Uzbek"
VI "Vietnamese"
VO "Volapuk"
WO "Wolof"
XH "Xhosa"
YO "Yoruba"
ZH "Chinese"
ZU "Zulu"

*/
