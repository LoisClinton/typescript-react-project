const textCleanup = (text: string) => {
  const regex1 = /&quot;/g; //regex to replace &quot;
  const regex2 = /&#039;/g; //regex to replace &#039;
  const regex3 = /&rdquo;/g; //regex to replace &rdquo;
  const regex4 = /&amp;/g; //regex to replace &amp;  =>  &
  const regex5 = /&Agrave;/g; //regex to replace &Agrave; => À
  const regex6 = /&Aacute;/g; //regex to replace &Aacute; => Á
  const regex7 = /&Acirc;/g; //regex to replace &Acirc; => Â
  const regex8 = /&Atilde;/g; //regex to replace &Atilde; => Ã
  const regex9 = /&Auml;/g; //regex to replace &Auml; => Ä
  const regex10 = /&Aring;/g; //regex to replace &Aring; => Å
  const regex11 = /&agrave;/g; //regex to replace &agrave; => à
  const regex12 = /&aacute;/g; //regex to replace &aacute; => á
  const regex13 = /&acirc;/g; //regex to replace &acirc; => â
  const regex14 = /&atilde;/g; //regex to replace &atilde; => ã
  const regex15 = /&auml;/g; //regex to replace &auml; => ä
  const regex16 = /&aring;/g; //regex to replace &aring; =>  å
  const regex17 = /&AElig;/g; //regex to replace &AElig;  => Æ
  const regex18 = /&aelig;/g; //regex to replace &aelig; => æ
  const regex19 = /&szlig;/g; //regex to replace &szlig; => ß
  const regex20 = /&Ccedil;/g; //regex to replace &Ccedil; => Ç
  const regex21 = /&ccedil;/g; //regex to replace &ccedil; =>  ç
  const regex22 = /&Egrave;/g; //regex to replace &Egrave; => È
  const regex23 = /&Eacute;/g; //regex to replace &Eacute; => É
  const regex24 = /&Ecirc;/g; //regex to replace &Ecirc; => Ê
  const regex25 = /&Euml;/g; //regex to replace &Euml; => Ë
  const regex26 = /&egrave;/g; //regex to replace &egrave; => è
  const regex27 = /&eacute;/g; //regex to replace &eacute; => é
  const regex28 = /&ecirc;/g; //regex to replace &ecirc; => ê
  const regex29 = /&euml/g; //regex to replace &euml; => ë
  const regex30 = /&#131;/g; //regex to replace &#131; => ƒ
  const regex31 = /&Igrave;/g; //regex to replace &Igrave; => Ì
  const regex32 = /&Iacute;/g; //regex to replace &Iacute; => Í
  const regex33 = /&Icirc;/g; //regex to replace &Icirc; => Î
  const regex34 = /&Iuml;/g; //regex to replace &Iuml; => Ï
  const regex35 = /&igrave;/g; //regex to replace &igrave; => ì
  const regex36 = /&iacute;/g; //regex to replace &iacute; => í
  const regex37 = /&icirc;/g; //regex to replace &icirc; => î
  const regex38 = /&iuml;/g; //regex to replace &iuml; => ï
  const regex39 = /&Ntilde;/g; //regex to replace &Ntilde; => Ñ
  const regex40 = /&ntilde;/g; //regex to replace &ntilde; => ñ
  const regex41 = /&Ograve;/g; //regex to replace &Ograve; => Ò
  const regex42 = /&Oacute;/g; //regex to replace &Oacute; => Ó
  const regex43 = /&Ocirc;/g; //regex to replace &Ocirc; => Ô
  const regex44 = /&Otilde;/g; //regex to replace &Otilde; => Õ
  const regex45 = /&Ouml;/g; //regex to replace &Ouml; => Ö
  const regex46 = /&ograve;/g; //regex to replace &ograve; => ò
  const regex47 = /&oacute;/g; //regex to replace &oacute; => ó
  const regex48 = /&ocirc;/g; //regex to replace &ocirc; => ô
  const regex49 = /&otilde;/g; //regex to replace &otilde; => õ
  const regex50 = /&ouml;/g; //regex to replace &ouml; => ö
  const regex51 = /&Oslash;/g; //regex to replace &Oslash; => Ø
  const regex52 = /&oslash;/g; //regex to replace &oslash; => ø
  const regex53 = /&#140;/g; //regex to replace &#140; => Œ
  const regex54 = /&#156;/g; //regex to replace &#156; => œ
  const regex55 = /&#138;/g; //regex to replace &#138; => Š
  const regex56 = /&#154;/g; //regex to replace &#154; => š
  const regex57 = /&Ugrave;/g; //regex to replace &Ugrave; => Ù
  const regex58 = /&Uacute;/g; //regex to replace &Uacute; => Ú
  const regex59 = /&Ucirc;/g; //regex to replace &Ucirc; => Û
  const regex60 = /&Uuml;/g; //regex to replace &Uuml; => Ü
  const regex61 = /&ugrave;/g; //regex to replace &ugrave; => ù
  const regex62 = /&uacute;/g; //regex to replace &uacute; => ú
  const regex63 = /&ucirc;/g; //regex to replace &ucirc; => û
  const regex64 = /&uuml;/g; //regex to replace &uuml; => ü
  const regex65 = /&#181;/g; //regex to replace &#181; => µ
  const regex66 = /&#215;/g; //regex to replace &#215; => ×
  const regex67 = /&Yacute;/g; //regex to replace &Yacute; => Ý
  const regex68 = /&#159;/g; //regex to replace &#159; =>  Ÿ
  const regex69 = /&yacute;/g; //regex to replace &yacute; => ý
  const regex70 = /&yuml;/g; //regex to replace &yuml; => ÿ
  const regex71 = /&#176;/g; //regex to replace &#176; => °
  const regex72 = /&#134;/g; //regex to replace &#134; => †
  const regex73 = /&#135;/g; //regex to replace &#135; =>  ‡
  const regex74 = /&lt;/g; //regex to replace &lt; => <
  const regex75 = /&gt;/g; //regex to replace &gt; => >
  const regex76 = /&#177;/g; //regex to replace &#177; => ±
  const regex77 = /&#171;/g; //regex to replace &#171; => «
  const regex78 = /&#187;/g; //regex to replace &#187; => »
  const regex79 = /&#191;/g; //regex to replace &#191; => ¿
  const regex80 = /&#161;/g; //regex to replace &#161; => ¡
  const regex81 = /&#183;/g; //regex to replace &#183; => ·
  const regex82 = /&#149;/g; //regex to replace &#149; => •
  const regex83 = /&#153;/g; //regex to replace &#153; => ™
  const regex84 = /&copy;/g; //regex to replace &copy; => ©
  const regex85 = /&reg;/g; //regex to replace &reg; => ®
  const regex86 = /&#167;/g; //regex to replace &#167; => §
  const regex87 = /&#182;/g; //regex to replace &#182; => ¶

  const textToReturn = text

    .replace(regex1, '"')
    .replace(regex2, "'")
    .replace(regex3, "'")
    .replace(regex4, "&")
    .replace(regex5, "À")
    .replace(regex6, "Á")
    .replace(regex7, "Â")
    .replace(regex8, "Ã")
    .replace(regex9, "Ä")
    .replace(regex10, "Å")
    .replace(regex11, "à")
    .replace(regex12, "á")
    .replace(regex13, "â")
    .replace(regex14, "ã")
    .replace(regex15, "ä")
    .replace(regex16, "å")
    .replace(regex17, "Æ")
    .replace(regex18, "æ")
    .replace(regex19, "ß")
    .replace(regex20, "Ç")
    .replace(regex21, "ç")
    .replace(regex22, "È")
    .replace(regex23, "É")
    .replace(regex24, "Ê")
    .replace(regex25, "Ë")
    .replace(regex26, "è")
    .replace(regex27, "é")
    .replace(regex28, "ê")
    .replace(regex29, "ë")
    .replace(regex30, "ƒ")
    .replace(regex31, "Ì")
    .replace(regex32, "Í")
    .replace(regex33, "Î")
    .replace(regex34, "Ï")
    .replace(regex35, "ì")
    .replace(regex36, "í")
    .replace(regex37, "î")
    .replace(regex38, "ï")
    .replace(regex39, "Ñ")
    .replace(regex40, "ñ")
    .replace(regex41, "Ò")
    .replace(regex42, "Ó")
    .replace(regex43, "Ô")
    .replace(regex44, "Õ")
    .replace(regex45, "Ö")
    .replace(regex46, "ò")
    .replace(regex47, "ó")
    .replace(regex48, "ô")
    .replace(regex49, "õ")
    .replace(regex50, "ö")
    .replace(regex51, "Ø")
    .replace(regex52, "ø")
    .replace(regex53, "Œ")
    .replace(regex54, "œ")
    .replace(regex55, "Š")
    .replace(regex56, "š")
    .replace(regex57, "Ù")
    .replace(regex58, "Ú")
    .replace(regex59, "Û")
    .replace(regex60, "Ü")
    .replace(regex61, "ù")
    .replace(regex62, "ú")
    .replace(regex63, "û")
    .replace(regex64, "ü")
    .replace(regex65, "µ")
    .replace(regex66, "×")
    .replace(regex67, "Ý")
    .replace(regex68, "Ÿ")
    .replace(regex69, "ý")
    .replace(regex70, "ÿ")
    .replace(regex71, "°")
    .replace(regex72, "†")
    .replace(regex73, "‡")
    .replace(regex74, "<")
    .replace(regex75, ">")
    .replace(regex76, "±")
    .replace(regex77, "«")
    .replace(regex78, "»")
    .replace(regex79, "¿")
    .replace(regex80, "¡")
    .replace(regex81, "·")
    .replace(regex82, "•")
    .replace(regex83, "™")
    .replace(regex84, "©")
    .replace(regex85, "®")
    .replace(regex86, "§")
    .replace(regex87, "¶");

  return textToReturn;
};
export default textCleanup;
