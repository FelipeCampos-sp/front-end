/********************************************************************************

	SYNCER 〜 知識、感動をみんなと同期(Sync)するブログ

	* 配布場所
	https://syncer.jp/how-to-use-plyr-io

	* 最終更新日時
	2015/08/17 02:37

	* 作者
	あらゆ

	** 連絡先
	Twitter: https://twitter.com/arayutw
	Facebook: https://www.facebook.com/arayutw
	Google+: https://plus.google.com/114918692417332410369/
	E-mail: info@syncer.jp

	※ バグ、不具合の報告、提案、ご要望など、お待ちしております。
	※ 申し訳ありませんが、ご利用者様、個々の環境における問題はサポートしていません。

********************************************************************************/


(function(d, u){
	var a = new XMLHttpRequest(),
	b = d.body;

    // Check for CORS support
    // If you're loading from same domain, you can remove the if statement
	if("withCredentials" in a) {
		a.open("GET", u, true);
		a.send();
		a.onload = function(){
		var c = d.createElement("div");
		c.setAttribute("hidden", "");
		c.innerHTML = a.responseText;
		b.insertBefore(c, b.childNodes[0]);
		}
	}
})(document, "./sprite.svg");
