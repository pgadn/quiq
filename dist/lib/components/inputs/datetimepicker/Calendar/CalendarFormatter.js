var e=function(e,r){var a=function(e){return e<10?"0"+e:e};r||(r="M/d/yyyy");var c=e.getDate(),l=e.getMonth(),p=e.getFullYear(),t=e.getHours(),y=e.getMinutes(),M=e.getSeconds(),u=e.getMilliseconds(),n=t%12,s=a(n),d=a(t),g=a(y),i=a(M),o=t<12?"AM":"PM",b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],E=b.substring(0,4),h=a(c),m=l+1,S=a(m),v=["January","February","March","April","May","June","July","August","September","October","November","December"][l],H=v.substring(0,4),f=p+"",A=f.substring(2,3);return r=(r=r.replace("hh",s).replace("h",n).replace("HH",d).replace("H",t).replace("mm",g).replace("m",y).replace("ss",i).replace("s",M).replace("S",u).replace("dd",h).replace("d",c).replace("EEEE",b).replace("EEE",E).replace("yyyy",f).replace("yy",A).replace("aaa",o)).indexOf("MMM")>-1?r.replace("MMMM",v).replace("MMM",H):r.replace("MM",S).replace("M",m)};export{e as formatDate};
