import CryptoJS from "crypto-js";
const key = "82f2ceed4c503896c8a291e560bd4325"; // change to your key
const iv = "sinasinasisinaaa"; // change to your iv
export const PanelHelper = {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    aesEncrypt(txt) {
      //for encryption

      const cipher = CryptoJS.AES.encrypt(
        JSON.stringify(txt),
        CryptoJS.enc.Utf8.parse(key),
        {
          iv: CryptoJS.enc.Utf8.parse(iv),
          mode: CryptoJS.mode.CBC,
        }
      );
      return cipher.toString();
    },
    aesDencrypt(txt) {
      //for de-cryption
      const cipher = CryptoJS.AES.decrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
      });
      return CryptoJS.enc.Utf8.stringify(cipher).toString();
    },
    getEncryptedData(name) {
      if (localStorage.getItem(name)) {
        return JSON.parse(this.aesDencrypt(localStorage.getItem(name)));
      } else {
        return false;
      }
    },
    loadCSS(files) {
      files.forEach((file) => {
        if (!this.isScriptAlreadyIncluded(file, "link", "href")) {
          //check css alread load or not

        let tag = document.createElement("link");
        tag.rel = "stylesheet";
        // file.href = 'myfile.css'
        tag.href = file;
        tag.async = true;
        document.body.appendChild(tag);
        }
      });
    },
    loadJS(scripts) {
      scripts.forEach((script) => {
        // if(!this.isScriptAlreadyIncluded(script,'script','src')){//check script alread load or not
        
          let tag = document.createElement("script");
          tag.setAttribute('type','text/javascript');
          tag.setAttribute("src", script);
          tag.async = true;
          document.body.appendChild(tag);
        // }
      });
    },
    isScriptAlreadyIncluded(src, type, attribute) {
      var scripts = document.getElementsByTagName(type);
       
        // console.log()
      for(var i = 0; i < scripts.length; i++) 
         if(scripts[i].getAttribute(attribute) == src)
         {
          scripts[i].parentNode.removeChild(scripts[i])
         }
      return false;
    },
  },
};
