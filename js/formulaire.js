/* verification formulaire*/

/*--------------surligner en rouge si false---------------------------------*/



function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}
/*--------------verifier pseudo---------------------------------*/

function verifPseudo(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
/*-------------verifier mail----------------------------*/

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
/*-------------------verification du formulaire-----------------------------------*/

function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);
   
   
   if(pseudoOk && mailOk )
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}