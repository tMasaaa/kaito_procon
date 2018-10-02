(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("ul",[n("li",[t._v("概要")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress.vuejs.org/guide/#why-not",target:"_blank",rel:"noopener noreferrer"}},[t._v("他のHexoなどのstatic site generatorとの比較"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("まだアルファ版なので、安定性や周辺環境の豊富さなら他の方が楽だと思いますが、技術的興味とVueに慣れたい思いから採用しました。")]),t._v(" "),n("li",[t._v("正直、まだ情報が少ないし今後ガンガン変更されていくことが予想されるので、あまりブログには向かないかもしれないと思っています。一方で、Vueのエコシステムや構造に雰囲気だけでもなれるとっかかりとしては最高だと思います(これでいろいろ設定いじったあと、素のVuejsを触ると設定周りの扱いが楽に感じました)")]),t._v(" "),n("li",[t._v("あとwarningとかdangerのような、markdown-it拡張がすごくよい。")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),n("ul",[n("li",[t._v("以下、とくに断りのない場合、WSLでの操作です。")]),t._v(" "),n("li",[t._v("基本的には"),n("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式"),n("OutboundLink")],1),t._v("を見るとよいです。ここに拡張とかやりたいことの大半は載っていました。")])]),t._v(" "),t._m(6),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/hokaccha/nodebrew",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodebrew"),n("OutboundLink")],1),t._v("を利用してnode,npmが入っているとします。(node v10.8.0, npm 6.4.1で行っています)")])]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),n("ul",[n("li",[t._v("各項目は"),n("a",{attrs:{href:"https://vuepress.vuejs.org/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),n("OutboundLink")],1),t._v("を見てください。")]),t._v(" "),n("li",[t._v("title: ブログタイトル")]),t._v(" "),n("li",[t._v("description: metaタグで反映される。ブログの説明。")]),t._v(" "),n("li",[t._v("base: URL/xxxのxxxに入るもの")]),t._v(" "),n("li",[t._v("dest: 'docs'これはGitHubPages用。ビルド出力先のディレクトリを指定する。")]),t._v(" "),n("li",[t._v("head: アイコンや、読み込む外部stylesheetなど")]),t._v(" "),t._m(16),t._v(" "),n("li",[t._v("themeConfig: ルーティング。")])]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v(".gitignore")]),t._v(" "),t._m(24),n("ul",[t._m(25),t._v(" "),n("li",[t._v("GitHubへpush")]),t._v(" "),n("li",[t._v("Settings>GitHubPages>Sourceから、None->master branch docs folderに変更してsave")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://tmasaaa.github.io/kaito_procon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tmasaaa.github.io/kaito_procon/"),n("OutboundLink")],1),t._v(" でホスティングされているのがわかる。")])]),t._v(" "),t._m(26),t._v(" "),t._m(27)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vuepressをはじめよう"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepressをはじめよう","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuepressをはじめよう")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"wslでの準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wslでの準備","aria-hidden":"true"}},[this._v("#")]),this._v(" WSLでの準備")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("環境: windows(WSL)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('kaito@PC:~/dev/kaito$ cat /etc/lsb-release\nDISTRIB_ID=Ubuntu\nDISTRIB_RELEASE=18.04\nDISTRIB_CODENAME=bionic\nDISTRIB_DESCRIPTION="Ubuntu 18.04.1 LTS"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("まずは、windows側でフォルダを作って(ここでvuepressという名前のフォルダにするとハマるので、それ以外にしましょう)、シンボリックリンクをWSLからwindows側に向けて張ります")]),this._v(" "),e("li",[this._v("WSLでの操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ln -s /mnt/c/Cmmd/Project/dev/kaito ~/kaito\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"インストールと最小構成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#インストールと最小構成","aria-hidden":"true"}},[this._v("#")]),this._v(" インストールと最小構成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cd kaito\nnpm init -y\nnpm install -g vuepress\nnpm install vuepress\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("WSLはI/Oがちょっと遅いので待ちます。")]),this._v(" "),e("li",[this._v("次に、kaito/srcディレクトリを作り(ここに設定やmarkdownを書く)、kaito/src/README.mdというファイルを作ります。READMEには"),e("code",[this._v("# Hello VuePress")]),this._v("とか書いておきましょう")]),this._v(" "),e("li",[this._v("package.jsonを以下のように書き換えます(scripts, authorを変更しています)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n  "name": "kaito",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "dev": "vuepress dev src",\n    "build": "vuepress build src"\n  },\n  "keywords": [],\n  "author": "kaito_tateyama",\n  "license": "ISC",\n  "dependencies": {\n    "vuepress": "^0.14.4"\n  }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("これで準備は整いました。kaitoディレクトリで"),e("code",[this._v("npm run dev")]),this._v("をしてみましょう。")]),this._v(" "),e("li",[this._v("localhost:xxxxにアクセスされるように言われるのでそこにアクセスします。")]),this._v(" "),e("li",[this._v("Hello VuePressのように表示されていればOKです。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"plugin-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-install","aria-hidden":"true"}},[this._v("#")]),this._v(" plugin install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("[数式レンダリング]")]),this._v(" "),e("li",[e("code",[this._v("npm install markdown-it --save-dev")])]),this._v(" "),e("li",[e("code",[this._v("npm install markdown-it-katex --save-dev")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"config系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config系","aria-hidden":"true"}},[this._v("#")]),this._v(" config系")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("webpackを用いて出力するときにはconfigファイルが必要になります。VuePressでは"),e("code",[this._v("src/.vuepress/config.js")]),this._v("で管理します。")]),this._v(" "),e("li",[this._v("kaito/src/.vuepressディレクトリを作り、中にconfig.jsファイルを作ります。記述は以下のようにします。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("module.exports = {\n    title: 'kaitoの精進記録',\n    description: '',\n    base: '/kaito_procon/',\n    dest: 'docs',\n    head: [\n        ['link',\n            {\n                rel: 'stylesheet',\n                href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'\n            }\n        ],\n        ['link',\n            {\n                rel: 'stylesheet',\n                href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'\n            }\n        ],\n        ['link',\n            {\n                rel: 'icon',\n                type: 'image/png',\n                href: '/__YOUR__FILE__.png'\n            }\n        ]\n    ],\n    markdown: {\n        anchor: {\n            permalink: true\n        },\n        config: md => {\n            md.use(require(\"markdown-it-katex\"))\n            md.options.linkify = true\n        }\n    },\n    themeConfig: {\n        search: true,\n        nav: [{\n                text: 'HOME',\n                link: '/'\n            },\n            {\n                text: 'ABOUT',\n                link: '/about.html'\n            },\n            {\n                text: 'WORKS',\n                link: '/works.html'\n            }\n        ]\n    }\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("markdown: markdownのレンダリング設定。ここでは、anchor(#)、数式を使うためにkatexを導入している。\n"),e("ul",[e("li",[this._v("katexはmathjaxより機能が少ないが早いので、そこまで複雑な式を書かないつもりで導入した。場合によってはmathjaxに移行するつもり。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ディレクトリ構成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ディレクトリ構成","aria-hidden":"true"}},[this._v("#")]),this._v(" ディレクトリ構成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("上のconfig.jsに従ってディレクトリ、ファイルを構成します。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("src/\n  |-_assets/\n    |-markdownで使うファイル.png\n  |-.vuepress/\n    |-components/\n      |-vueファイル(部品).vue\n    |-public/\n      |-icon.png\n    |-config.js\n  |-about.md\n  |-home.md\n  |-works.md\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("基本はこんな感じで、あとはblog/ディレクトリを設置してその下に精進記事を入れるみたいな感じです。")]),this._v(" "),e("li",[this._v("実際に数式込みでやってみます。home.mdを、以下のようにします。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# summer festival contest 2018 (#夏祭りコン2018)\n- Fについて書きます。\n\n::: tip 問題\n$\\sum_{i=0}^{K-1} a \\uparrow \\uparrow i (mod M)$ を求めよ。\n:::\n- 方針\n- 部分問題として、$a \\uparrow\\uparrow i (mod M)$を求める。\n- $a$と$M$が互いに素のときは、\n- $a^{\\phi(M)} = 1 (mod M)$なので、$a \\uparrow\\uparrow i (mod M)$を求めるには$a \\uparrow\\uparrow (i-1) (mod \\phi(M))$を求めればOK\n- さらに、それを求めるには$a \\uparrow\\uparrow (i-2)(mod \\phi(\\phi(M)))$を求めればOK→これを続ける→...→再帰で実装する。計算量は$O(K)$\n\n::: warning $\\phi(x)$の性質\n(1) xが偶数→$\\phi(x)$は$x/2$未満<br>\n(2) xが$3$以上→$\\phi(x)$は偶数\n:::\n\n- (1)は、$p=2$に着目すると、掛ける因数に$2^e - 2^{e-1} = 2^{e-1}$が入るので$x$の半分未満になる\n- (2)は、$p$が奇素数の場合を考えると、掛ける因数に$p^e - p^{e-1}$(奇数 - 奇数)が入るので偶数と分かる。\n- この性質により、$\\log M$回程度の繰り返しで$\\phi(x)=1$となり、$mod1$の値を求めることになる。これは$0$に等しい。\n- この場合は、$O(\\min(K, \\log M))$で解けた。\n- では、$a$と$M$が互いに素でない場合は？\n::: danger WIP\n書きかけです\n:::\n\n\n\n## range-based forの`auto x`, `auto &x`, `auto& x`\n\n::: warning \nauto& xとauto &xの違いが分からない→夜になったらSlackに投げる。\n:::\n\n- `auto x`このときイテレータの実態をコピーしている\n- `auto& x`このとき参照(ポインタのコピー)が行われている\n- ~~ `auto &x`アドレス？？参照が行われていると思われる~~ →これは存在しない\n\n| 対象 | 使い方 |\n|:--|:--|\n| auto x | コピーが対象、変更してもoriginalに影響はない |\n| auto& x | originalを対象に、変更を加えたいとき |\n| const auto& x | originalを対象に、変更を加えたくないとき |\n\n- [三つの違いについて](https://stackoverflow.com/questions/15176104/c11-range-based-loop-get-item-by-value-or-reference-to-const)\n- [auto& xについて](https://qiita.com/rinse_/items/cdfce8aa6a685a8ebe0c)\n- [range-based-for](https://cpprefjp.github.io/lang/cpp11/range_based_for.html)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("npm run dev")]),this._v("してみてみると、数式がレンダリングされている様子が見えると思います。")]),this._v(" "),e("li",[this._v("components/にvueファイルを作って"),e("code",[this._v("<my_vuefile/>")]),this._v("とかするとそのvueコンポーネントが使えるので、markdownだけど自由度的にはHTMLと同等だと思います(スタイルがどれくらいできるかは微妙なところですが…)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ビルドしてgithubpagesにデプロイしよう"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ビルドしてgithubpagesにデプロイしよう","aria-hidden":"true"}},[this._v("#")]),this._v(" ビルドしてGitHubPagesにデプロイしよう")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("node_modules/\n# /dist/\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# Editor directories and files\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("cd kaito")]),this._v(" -> "),e("code",[this._v("npm run build")]),this._v(" buildを忘れずに！！！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"やりたいこと"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#やりたいこと","aria-hidden":"true"}},[this._v("#")]),this._v(" やりたいこと")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("markdownをblog/以下のディレクトリに追加したとき自動でルーティングしてほしい(いちいちルーティング書くの面倒)")]),this._v(" "),e("li",[this._v("Vueファイルでmarkdownを使いやすく拡張する。")]),this._v(" "),e("li",[this._v("どこかにpushしたとき、向こうで自動buildしてほしい")])])}],!1,null,null,null);i.options.__file="works.md";e.default=i.exports}}]);