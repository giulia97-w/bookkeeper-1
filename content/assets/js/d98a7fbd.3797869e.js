"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[595],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||n;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4605:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),o=["components"],s={id:"distributedlog-api",title:"DistributedLog"},l=void 0,d={unversionedId:"api/distributedlog-api",id:"version-4.15.4/api/distributedlog-api",title:"DistributedLog",description:"DistributedLog began its life as a separate project under the Apache Foundation. It was merged into BookKeeper in 2017.",source:"@site/versioned_docs/version-4.15.4/api/distributedlog-api.md",sourceDirName:"api",slug:"/api/distributedlog-api",permalink:"/docs/api/distributedlog-api",tags:[],version:"4.15.4",frontMatter:{id:"distributedlog-api",title:"DistributedLog"},sidebar:"docsSidebar",previous:{title:"The Advanced Ledger API",permalink:"/docs/api/ledger-adv-api"},next:{title:"BookKeeper Security",permalink:"/docs/security/overview"}},p={},u=[{value:"Architecture",id:"architecture",level:2},{value:"Logs",id:"logs",level:2},{value:"Log records",id:"log-records",level:3},{value:"Log segments",id:"log-segments",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Writers",id:"writers",level:2},{value:"Write Proxy",id:"write-proxy",level:3},{value:"Readers",id:"readers",level:2},{value:"Read Proxy",id:"read-proxy",level:3},{value:"Guarantees",id:"guarantees",level:2},{value:"API",id:"api",level:2}],c={toc:u};function g(e){var t=e.components,s=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"DistributedLog began its life as a separate project under the Apache Foundation. It was merged into BookKeeper in 2017.")),(0,n.kt)("p",null,"The DistributedLog API is an easy-to-use interface for managing BookKeeper entries that enables you to use BookKeeper without needing to interact with ",(0,n.kt)("a",{parentName:"p",href:"ledger-api"},"ledgers")," directly."),(0,n.kt)("p",null,"DistributedLog (DL) maintains sequences of records in categories called ",(0,n.kt)("em",{parentName:"p"},"logs")," (aka ",(0,n.kt)("em",{parentName:"p"},"log streams"),"). ",(0,n.kt)("em",{parentName:"p"},"Writers")," append records to DL logs, while ",(0,n.kt)("em",{parentName:"p"},"readers")," fetch and process those records."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The diagram below illustrates how the DistributedLog API works with BookKeeper:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"DistributedLog API",src:r(8659).Z,width:"818",height:"441"})),(0,n.kt)("h2",{id:"logs"},"Logs"),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"log")," in DistributedLog is an ordered, immutable sequence of ",(0,n.kt)("em",{parentName:"p"},"log records"),"."),(0,n.kt)("p",null,"The diagram below illustrates the anatomy of a log stream:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"DistributedLog log",src:r(9627).Z,width:"620",height:"516"})),(0,n.kt)("h3",{id:"log-records"},"Log records"),(0,n.kt)("p",null,"Each log record is a sequence of bytes. Applications are responsible for serializing and deserializing byte sequences stored in log records."),(0,n.kt)("p",null,"Log records are written sequentially into a ",(0,n.kt)("em",{parentName:"p"},"log stream")," and assigned with a a unique sequence number called a DLSN (",(0,n.kt)("strong",null,"D"),"istributed",(0,n.kt)("strong",null,"L"),"og ",(0,n.kt)("strong",null,"S"),"equence ",(0,n.kt)("strong",null,"N"),"umber)."),(0,n.kt)("p",null,"In addition to a DLSN, applications can assign their own sequence number when constructing log records. Application-defined sequence numbers are known as ",(0,n.kt)("em",{parentName:"p"},"TransactionIDs")," (or ",(0,n.kt)("em",{parentName:"p"},"txid"),"). Either a DLSN or a TransactionID can be used for positioning readers to start reading from a specific log record."),(0,n.kt)("h3",{id:"log-segments"},"Log segments"),(0,n.kt)("p",null,"Each log is broken down into ",(0,n.kt)("em",{parentName:"p"},"log segments")," that contain subsets of records. Log segments are distributed and stored in BookKeeper. DistributedLog rolls the log segments based on the configured ",(0,n.kt)("em",{parentName:"p"},"rolling policy"),", which be either"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a configurable period of time (such as every 2 hours), or"),(0,n.kt)("li",{parentName:"ul"},"a configurable maximum size (such as every 128 MB).")),(0,n.kt)("p",null,"The data in logs is divided up into equally sized log segments and distributed evenly across bookies. This allows logs to scale beyond a size that would fit on a single server and spreads read traffic across the cluster."),(0,n.kt)("h3",{id:"namespaces"},"Namespaces"),(0,n.kt)("p",null,"Log streams that belong to the same organization are typically categorized and managed under a ",(0,n.kt)("em",{parentName:"p"},"namespace"),". DistributedLog namespaces essentially enable applications to locate log streams. Applications can perform the following actions under a namespace:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create streams"),(0,n.kt)("li",{parentName:"ul"},"delete streams"),(0,n.kt)("li",{parentName:"ul"},"truncate streams to a given sequence number (either a DLSN or a TransactionID)")),(0,n.kt)("h2",{id:"writers"},"Writers"),(0,n.kt)("p",null,"Through the DistributedLog API, writers write data into logs of their choice. All records are appended into logs in order. The sequencing is performed by the writer, which means that there is only one active writer for a log at any given time."),(0,n.kt)("p",null,"DistributedLog guarantees correctness when two writers attempt to write to the same log when a network partition occurs using a ",(0,n.kt)("em",{parentName:"p"},"fencing")," mechanism in the log segment store."),(0,n.kt)("h3",{id:"write-proxy"},"Write Proxy"),(0,n.kt)("p",null,"Log writers are served and managed in a service tier called the ",(0,n.kt)("em",{parentName:"p"},"Write Proxy")," (see the diagram ",(0,n.kt)("a",{parentName:"p",href:"#architecture"},"above"),"). The Write Proxy is used for accepting writes from a large number of clients."),(0,n.kt)("h2",{id:"readers"},"Readers"),(0,n.kt)("p",null,"DistributedLog readers read records from logs of their choice, starting with a provided position. The provided position can be either a DLSN or a TransactionID."),(0,n.kt)("p",null,"Readers read records from logs in strict order. Different readers can read records from different positions in the same log."),(0,n.kt)("p",null,"Unlike other pub-sub systems, DistributedLog doesn't record or manage readers' positions. This means that tracking is the responsibility of applications, as different applications may have different requirements for tracking and coordinating positions. This is hard to get right with a single approach. Distributed databases, for example, might store reader positions along with SSTables, so they would resume applying transactions from the positions store in SSTables. Tracking reader positions could easily be done at the application level using various stores (such as ZooKeeper, the filesystem, or key-value stores)."),(0,n.kt)("h3",{id:"read-proxy"},"Read Proxy"),(0,n.kt)("p",null,"Log records can be cached in a service tier called the ",(0,n.kt)("em",{parentName:"p"},"Read Proxy")," to serve a large number of readers. See the diagram ",(0,n.kt)("a",{parentName:"p",href:"#architecture"},"above"),". The Read Proxy is the analogue of the ",(0,n.kt)("a",{parentName:"p",href:"#write-proxy"},"Write Proxy"),"."),(0,n.kt)("h2",{id:"guarantees"},"Guarantees"),(0,n.kt)("p",null,"The DistributedLog API for BookKeeper provides a number of guarantees for applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Records written by a ",(0,n.kt)("a",{parentName:"li",href:"#writers"},"writer")," to a ",(0,n.kt)("a",{parentName:"li",href:"#logs"},"log")," are appended in the order in which they are written. If a record ",(0,n.kt)("strong",{parentName:"li"},"R1")," is written by the same writer as a record ",(0,n.kt)("strong",{parentName:"li"},"R2"),", ",(0,n.kt)("strong",{parentName:"li"},"R1")," will have a smaller sequence number than ",(0,n.kt)("strong",{parentName:"li"},"R2"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#readers"},"Readers")," see ",(0,n.kt)("a",{parentName:"li",href:"#log-records"},"records")," in the same order in which they are ",(0,n.kt)("a",{parentName:"li",href:"#writers"},"written")," to the log."),(0,n.kt)("li",{parentName:"ul"},"All records are persisted on disk by BookKeeper before acknowledgements, which guarantees durability."),(0,n.kt)("li",{parentName:"ul"},"For a log with a replication factor of N, DistributedLog tolerates up to N-1 server failures without losing any records.")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"Documentation for the DistributedLog API can be found ",(0,n.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/next/api/distributedlog-api"},"here"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"At a later date, the DistributedLog API docs will be added here.")))}g.isMDXComponent=!0},8659:function(e,t,r){t.Z=r.p+"assets/images/distributedlog-e72b5c54b4a5ca53e33a6740bb2b4242.png"},9627:function(e,t,r){t.Z=r.p+"assets/images/logs-4fa7115af12e41a46d64d9e300847af4.png"}}]);