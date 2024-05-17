import{_ as s,c as a,o as i,V as e}from"./chunks/framework.C80zbCY-.js";const u=JSON.parse('{"title":"Cómo Utilizar Métodos de Matriz en Javascript: Métodos de Acceso","description":"","frontmatter":{},"headers":[],"relativePath":"how-to-use-array-methods-in-javascript-accessor-methods.md","filePath":"how-to-use-array-methods-in-javascript-accessor-methods.md"}'),n={name:"how-to-use-array-methods-in-javascript-accessor-methods.md"},t=e(`<h1 id="como-utilizar-metodos-de-matriz-en-javascript-metodos-de-acceso" tabindex="-1">Cómo Utilizar Métodos de Matriz en Javascript: Métodos de Acceso <a class="header-anchor" href="#como-utilizar-metodos-de-matriz-en-javascript-metodos-de-acceso" aria-label="Permalink to &quot;Cómo Utilizar Métodos de Matriz en Javascript: Métodos de Acceso&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-accessor-methods" target="_blank" rel="noreferrer">aquí</a></p></div><h2 id="introduccion" tabindex="-1">Introducción <a class="header-anchor" href="#introduccion" aria-label="Permalink to &quot;Introducción&quot;">​</a></h2><p>La matriz de JavaScript es un tipo de datos que consta de una lista de elementos. Existen muchos métodos integrados útiles para trabajar con matrices en JavaScript. Los métodos que modifican la matriz original se conocen como métodos <strong>mutadores</strong> y los métodos que devuelven un nuevo valor o representación se conocen como métodos de <strong>acceso</strong>. En este tutorial, nos centraremos en los métodos de acceso.</p><p>Para aprovechar al máximo este tutorial, debe estar familiarizado con la creación, indexación, modificación y bucle de matrices, lo cual puede revisar en el tutorial <a href="./understanding-arrays-in-javascript.html">Comprender Matrices en JavaScript</a>.</p><p>Este tutorial repasará métodos que concatenarán matrices, convertirán matrices en cadenas, copiarán partes de una matriz en una nueva matriz y encontrarán los índices de las matrices.</p><div class="info custom-block"><p class="custom-block-title">Nota</p><p>Los métodos de Matrices se escriben correctamente como <code>Array.prototype.method()</code>, ya que <code>Array.prototype</code> se refiere al objeto <code>Array</code> en sí. Para simplificar, simplemente enumeraremos el nombre como <code>method()</code>.</p></div><h2 id="concat" tabindex="-1">concat() <a class="header-anchor" href="#concat" aria-label="Permalink to &quot;concat()&quot;">​</a></h2><p>El método <code>concat()</code> fusiona dos o más matrices para formar una nueva matriz.</p><p>En el siguiente ejemplo, crearemos dos matrices de tipos mariscos y las combinaremos en una nueva matriz.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create arrays of monovalves and bivalves</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> monovalves </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abalone&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;conch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bivalves </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oyster&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mussel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clam&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Concatenate them together into shellfish variable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shellfish </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> monovalves.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bivalves);</span></span></code></pre></div><p>Una vez que llamamos a la nueva matriz, veremos que consta de una combinación de las dos matrices originales:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shellfish;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abalone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;conch&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;oyster&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mussel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;clam&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span></code></pre></div><p>El método <code>concat()</code> puede tomar múltiples argumentos, lo que le permite concatenar muchas matrices con un solo método.</p><h2 id="join" tabindex="-1">join() <a class="header-anchor" href="#join" aria-label="Permalink to &quot;join()&quot;">​</a></h2><p>El método <code>join()</code> convierte todos los elementos de una matriz en una nueva cadena.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;piranha&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;koi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span></span></code></pre></div><p>Si no se proporciona ningún argumento, la salida de <code>join()</code> será una cadena separada por comas sin espacios en blanco adicionales.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Join the elements of an array into a string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fishString </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fishString;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;piranha,barracuda,koi,eel&#39;</span></span></code></pre></div><p>Para incluir espacios en blanco u otro separador, puede agregar una cadena de su separador como parámetro al método <code>join()</code>. Este parámetro contendrá el separador que desee entre cada elemento de la matriz.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Join the elements of an array into a string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fishString </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;, &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fishString;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;piranha, barracuda, koi, eel&#39;</span></span></code></pre></div><p>En el ejemplo anterior, escribir <code>&#39;, &#39;</code> con espacios en blanco separó los elementos de la matriz de una manera más legible. Una cadena vacía proporcionada como argumento eliminará por completo las comas predeterminadas.</p><h2 id="slice" tabindex="-1">slice() <a class="header-anchor" href="#slice" aria-label="Permalink to &quot;slice()&quot;">​</a></h2><p>El método <code>slice()</code> copia una parte de una matriz en una nueva matriz.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;piranha&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;koi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span></span></code></pre></div><p>Supongamos que queremos copiar los dos últimos elementos de la matriz a una nueva matriz. Comenzaríamos con el número de índice del primer elemento que queremos, que es <code>2</code> para <code>koi</code>. Terminaríamos con el número de índice <em>siguiendo</em> el último elemento que queramos. Debido a que el último elemento, <code>eel</code>, tiene el número de índice <code>3</code>, pondríamos <code>4</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Slice a new array from 2 to 5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fishWithShortNames </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fishWithShortNames;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;koi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span></code></pre></div><p>En este caso particular, dado que <code>eel</code> es el último elemento de la matriz, el segundo argumento es realmente innecesario. <code>slice()</code> comenzará en el primer índice y se detendrá al final de la matriz si no se proporciona un segundo argumento.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Slice a new array from 2 to the end of the array</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fishWithShortNames </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fishWithShortNames;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;koi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span></code></pre></div><p><code>slice()</code> no debe confundirse con el <a href="./how-to-use-array-methods-in-javascript-mutator-methods.html#splice">método mutador <code>splice()</code></a>, que puede agregar o eliminar elementos de la matriz original.</p><h2 id="indexof" tabindex="-1">indexOf() <a class="header-anchor" href="#indexof" aria-label="Permalink to &quot;indexOf()&quot;">​</a></h2><p>El método <code>indexOf()</code> devuelve el número de índice de la primera instancia de un elemento.</p><p>En el siguiente ejemplo, tenemos una cadena en la que <code>barracuda</code> aparece dos veces.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;piranha&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;koi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span></span></code></pre></div><p>Usaremos <code>indexOf()</code> para encontrar la primera instancia.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Find the first instance of an element</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span></span></code></pre></div><p>Usaremos <code>indexOf()</code> para encontrar la primera instancia. Si el argumento dado es un valor que no existe en la matriz, la consola devolverá <code>-1</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-1</span></span></code></pre></div><p>El método <code>indexOf()</code> es especialmente útil en matrices que contienen muchos elementos.</p><h2 id="lastindexof" tabindex="-1">lastIndexOf() <a class="header-anchor" href="#lastindexof" aria-label="Permalink to &quot;lastIndexOf()&quot;">​</a></h2><p>El método <code>lastIndexOf()</code> devuelve el número de índice de la última instancia de un elemento.</p><p>Podemos probar con el mismo ejemplo de <code>indexOf()</code>, que incluye <code>barracuda</code> dos veces.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fish </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;piranha&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;koi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Find the last instance of an element</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fish.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastIndexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;barracuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3</span></span></code></pre></div><p><code>lastIndexOf()</code> buscará en la matriz comenzando desde el final y devolverá el primer número de índice que encuentre.</p><h2 id="conclusion" tabindex="-1">Conclusión <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusión&quot;">​</a></h2><p>En este tutorial, revisamos los principales métodos de matriz de acceso integrados en JavaScript. Los métodos de acceso crean una nueva copia o representación de una matriz, en lugar de mutar o modificar el original.</p><p>Aprendimos cómo concatenar matrices, lo que las combina de un extremo a otro, así como también cómo convertir matrices en cadenas separadas por comas. También aprendimos cómo copiar partes de una matriz en una nueva matriz y encontrar el primer y último índice de un elemento determinado en una matriz.</p><p>Para revisar los conceptos básicos de las matrices, lea <a href="./understanding-arrays-in-javascript.html">Comprender Matrices en JavaScript</a>. Para ver una lista completa de todos los métodos de matriz, consulte la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">Referencia de matriz en Mozilla Developer Network</a>.</p>`,56),l=[t];function p(h,o,r,d,k,c){return i(),a("div",null,l)}const g=s(n,[["render",p]]);export{u as __pageData,g as default};