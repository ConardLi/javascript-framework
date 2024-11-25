// File generated from "node scripts/generateContent.js", DO NOT EDIT/COMMIT
export default [
  {
    frameworkId: "marko",
    snippetId: "declare-state",
    files: [
      {
        fileName: "Name.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Hello </span><span style="color:#C678DD">${</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAcrOA6GUBOBrAezABowAHKAFwAskwB6AYwJjIIjgkoGd614suQiTDMunSnQA8AGziV60eAAIAvMoA6YAFIFqELfQB8GiFOoBGIwAk4MmQWUASEErgBfKfUsmIYdwC6QA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/1-declare-state/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "update-state",
    files: [
      {
        fileName: "Name.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">effect</span><span style="color:#ABB2BF">() { </span><span style="color:#E06C75">name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF"> }/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Hello </span><span style="color:#C678DD">${</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAcrOA6GUBOBrAezABowAHKAFwAskwB6AYwJjIIjgkoGd614suQiTDMunSnQA8AGziV60eAAIAvMoA6YAFIFqELfQB8GiFLgAzC3EaUAFAEplIZUrhrNOqBy3KAvsamUtQAjEYAEnAyMgTKACQgbn5S9KEmEGB+ALpAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/2-update-state/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "computed-state",
    files: [
      {
        fileName: "DoubleCount.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">count</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 10</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">const</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">doubleCount</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> *</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">${</span><span style="color:#E06C75">doubleCount</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAIgewK4CMA2cDCmEALgHQxQBOA1mmADRgAOUxAFkmAPQDGaMTNBDgkAzl3TY8hDCXJVaDMHxIjinADx5ivIsQAEAXn0BGAAxcAfAB0IGlaJ0ATTLgJ6j+vrIMAqfQBMVrYaTgCWAG6WACQgLlLuPgC+GlzhUbZgSQC6QA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/3-computed-state/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "minimal-template",
    files: [
      {
        fileName: "HelloWorld.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Hello world</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAEnANug9gdSwJ3QBMA6GKfAayzABowAHKAFwAskwB6AYyxgawQ4EZgGdOaTLgLEyFanTC8Rw5hwA8rAIwA+SdgAEAdxlF1nbToA6EMAF8AukA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/1-minimal-template/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "styling",
    files: [
      {
        fileName: "CssStyle.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#D19A66">.title</span><span style="color:#ABB2BF">></span><span style="color:#98C379">I am red</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style</span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF">{ </span><span style="color:#E06C75">fontSize</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"10rem"</span><span style="color:#ABB2BF"> }></span><span style="color:#98C379">I am a button</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> class</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">scopedButton</span><span style="color:#ABB2BF">></span><span style="color:#98C379">I am a style-scoped button</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#D19A66">  .title</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">    color: </span><span style="color:#D19A66">red</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">/{ </span><span style="color:#E06C75">scopedButton</span><span style="color:#ABB2BF"> }></span></span>\n<span class="line"><span style="color:#D19A66">  .scopedButton</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">    font-size: </span><span style="color:#D19A66">10</span><span style="color:#E06C75">rem</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAwgZzQZQC4E8A2cAdDFAE4DWA9mADRgAOU2AFkmAPQDGVMDVEOBGxoO6LHkIly1OmB7Ch2dgB4WARiLYAltkIA+AJIACWMbJwAJio4b9AHQgqARgFds2AcbSS4AXhBjADMBbExtAC84RGN7MHUABgsYOOMAXyNTGFNjNw8BGzzPCAcnIq8ufCgMPzQeBisAIXdizLMob18AWjqqBstcloKOcpLHRxUfAjhS42MtXUJjEEc5uZ58KjIYi0sAblX0iY4pgwnTuA5A3v7m-Ih02fmbpqGHlYe1kOEeyOjjRLJA6fNLHC6lMBpAC6QA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/2-styling/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "loop",
    files: [
      {
        fileName: "Colors.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#56B6C2">for</span><span style="color:#ABB2BF">|</span><span style="color:#E06C75;font-style:italic">color</span><span style="color:#ABB2BF">| </span><span style="color:#D19A66">of</span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF">[</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">]></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">${</span><span style="color:#E06C75">color</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#56B6C2">for</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAwgewDZoE4GcB0MU2A1mmADRgAOUALgBZJgD0AxmjNWhHBHbhboseQsTKUwHfnzrMAPAFcMAPgA6EAASb5AMxwAfDiIOa0ugLzA1YbHAAmNippsBzO3ycuwAIwyK4GwBddS1tHQwASxUAEhBjHABfeRYo0O0U-WxQlOVQsESgoA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/3-loop/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "event-click",
    files: [
      {
        fileName: "Counter.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">count</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Counter: </span><span style="color:#C678DD">${</span><span style="color:#E06C75">count</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> onClick() { </span><span style="color:#E06C75">count</span><span style="color:#56B6C2">++</span><span style="color:#ABB2BF"> }></span><span style="color:#98C379">+1</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAwgewK4QC5wE4B0MUeA1mmADRgAOU2AFkmAPQDGaMNaEcOAzi3RZchYmQrUOOPtmYAeADZxs7TDgAEAXg0AGFgD4AOhHk0DwmXkQaAJCA4iAvvJbmT8gEYZs2Hhp4URQBLNlIACgBKDRANRxwAagSNJwMEgEZXb18eYwgwJwBdIA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/4-event-click/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "dom-ref",
    files: [
      {
        fileName: "InputFocused.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">inputElement</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">effect</span><span style="color:#ABB2BF">() { </span><span style="color:#61AFEF">inputElement</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">focus</span><span style="color:#ABB2BF">() }/></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAkhADgVwC4DED2AxpgM5wAmAdDFAE4DW+YANGOlNgBZJgD0h+GOnwQ4EbCV5oseIqQrU6jFmAHix2HgB4Alhhy89MgKIAbOPHEA+ADoQtcAGaO4hbAAoAlAAIQ3ozhmFhpelI5yJF7eAL68thBg0QC6QA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/5-dom-ref/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "conditional",
    files: [
      {
        fileName: "TrafficLight.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">static const</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">const</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">light</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">]/></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> onClick() { </span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> +</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">) </span><span style="color:#56B6C2">%</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">length</span><span style="color:#ABB2BF"> }></span></span>\n<span class="line"><span style="color:#98C379">  Next light</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Light is: </span><span style="color:#C678DD">${</span><span style="color:#E06C75">light</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#98C379">  You must</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#56B6C2">if=</span><span style="color:#E06C75">light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">></span><span style="color:#98C379">STOP</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#56B6C2">if</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#56B6C2">else-if=</span><span style="color:#E06C75">light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "orange"</span><span style="color:#ABB2BF">></span><span style="color:#98C379">SLOW DOWN</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#56B6C2">else-if</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#56B6C2">else</span><span style="color:#ABB2BF">></span><span style="color:#98C379">GO</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#56B6C2">else</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAKgJygM0wSwMYAyOA5gBYAuAdDFGgNYD2YANGAA5TmlJgD0eDGGwYQ4EcgGde6LLkIkK1WoxZgB4seR4TynfAAJ1O-SgBKAQQBilgJIBhAPoEbAcQASKAMr6AvPuAAOmBocAAmQcz6QQwYEMRwEVFgxCFiQQC6ANwBEAA8ADZw5Lz5CuQ2EKFwAB6++gAMvAB8OblGxaVk5HVmVraOzu5ewJ0UFVXV6c05rQBGAK7k5CL6InaleHQAFACU+iD6o+WVNXVbR+OnANT6AIx7AKQmFtb2Tq4enpSFcVz6AL4tCD6fQAORq3SOrV4CyWIiBuTYTSIXX0OAkiH0ABIQEd-rleEjWkTgfoAJoMeb6GDzHQ5EG5HCYHxHXw+PxBELhMBNTwoADyAAUCUygQy4PkJHAALRMlllNkcsAxKBxBI8zwEfkAdX0ABEdaCCRKpbLMGL9LkTXAmi5+cbJTboSSwP90kA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/6-conditional/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "on-mount",
    files: [
      {
        fileName: "PageTitle.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">effect</span><span style="color:#ABB2BF">() { </span><span style="color:#E06C75">pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> document</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">title</span><span style="color:#ABB2BF"> }/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Page title: </span><span style="color:#C678DD">${</span><span style="color:#E06C75">pageTitle</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAClA5nAKgSwC4A2cAdDFAE4DWA9mADRgAOUeAFkmAPQDG1Mj1CHAh4AzpzSZchEmSq0GvEcLwcAPETydmU-EQAEAXn0AdMGc4A+ExDVwAZvbjc8ACgCU+kPp3Y9cI30AE2puAFd4EWI8f30AXysbNUZLSQCYmUR9ABIQX2kiOLVtawgwOIBdIA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/1-on-mount/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "on-unmount",
    files: [
      {
        fileName: "Time.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#E06C75"> Date</span><span style="color:#ABB2BF">()/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">lifecycle</span></span>\n<span class="line"><span style="color:#ABB2BF">  onMount() { </span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">timer</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> setInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">_</span><span style="color:#C678DD"> =></span><span style="color:#E06C75"> time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">(), </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">) }</span></span>\n<span class="line"><span style="color:#ABB2BF">  onDestroy() { </span><span style="color:#61AFEF">clearInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">timer</span><span style="color:#ABB2BF">) }</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Current time: </span><span style="color:#C678DD">${</span><span style="color:#E5C07B">time</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">()</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAKgS3gOhlATgawHswAaMABygBcALJMAegGNCZzCI4IqBnB9LDgLEyLblyr0APABs4VBlQxwABAF4VnAO4qAItTgAKAJQMAfAB0IstADM4TAJ5M5VlSo4BZQgFduJlRAVWjQeTCV4XHUVHnkASXFcADcoGUMAfXUzYOVo7T0DExIVAEYABgrjFQBfNw8IXTgeKlxCRwCglzg8BKo4ZNTDELCI-qraiHMrKXIzAGEfXFwJHPhEFQASEFHwwgAZQiZUuAE4AGUWtAgAcxNqqQZZqzBqgF0gA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/2-on-unmount/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "props",
    files: [
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">UserProfile</span></span>\n<span class="line"><span style="color:#D19A66">  name</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"John"</span></span>\n<span class="line"><span style="color:#D19A66">  age</span><span style="color:#56B6C2">=</span><span style="color:#D19A66">20</span></span>\n<span class="line"><span style="color:#D19A66">  favouriteColors</span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF">[</span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">]</span></span>\n<span class="line"><span style="color:#D19A66">  isAvailable</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"></span></code></pre>',
      },
      {
        fileName: "UserProfile.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">const</span><span style="color:#ABB2BF">/{</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">  age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">  favouriteColors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [],</span></span>\n<span class="line"><span style="color:#E06C75">  isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">} </span><span style="color:#56B6C2">=</span><span style="color:#E06C75"> input</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">My name is </span><span style="color:#C678DD">${</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#98C379">!</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">My age is </span><span style="color:#C678DD">${</span><span style="color:#E06C75">age</span><span style="color:#C678DD">}</span><span style="color:#98C379">!</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">My favourite colors are </span><span style="color:#C678DD">${</span><span style="color:#E5C07B">favouriteColors</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">join</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">", "</span><span style="color:#ABB2BF">)</span><span style="color:#C678DD">}</span><span style="color:#98C379">!</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">I am </span><span style="color:#C678DD">${</span><span style="color:#E06C75">isAvailable</span><span style="color:#C678DD"> ?</span><span style="color:#98C379"> "available"</span><span style="color:#C678DD"> :</span><span style="color:#98C379"> "not available"</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAggBzQOhlATgawHswAaMNKAFwAskwB6AY0JjUIjgkoGd70scBYmWZdOlOgB4Aqtzi4ACrkIAzAJYAbOAB0IAAj3R4AXm1gAUoWoQzug1ADmcYwCYADHb0qoAN0IBXXDVKOABhQg1CXG5jYDMHXDhOMxI9MwAjDX8dUjSwRIATMwBdTzVuFB8oTShMnQh6AD5dMABfEnAjBGRZeSVVTThsPCJScipaZCYWNg4uXl7FZXUtYaEx0RCuKVFuSnoQTy69YzyUz0c4E8N-DQ0ST28-QOCwiKjua+Bih-09csq1Q0tS0128Gjkv1a1zUEDQ-n2zRsEEkaEaAFkAJ6GWBXcp6AAkIC6rQAhJJ6GjdKiMdjLv9PkTLmSKVSUWisV5fAEgiE9MxItE9HgrkSnjzXuFBdxMAArQiwgAUKTyAEoWZSkTSAJLCmCEkAAqo1Op6AD8eV8QJBOT0iDyEEIlGFxuBdTMrVZSLaxSAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/1-props/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "emit-to-parent",
    files: [
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Are you happy?</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">AnswerButton</span></span>\n<span class="line"><span style="color:#ABB2BF">  onYes() { </span><span style="color:#E06C75">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF"> }</span></span>\n<span class="line"><span style="color:#ABB2BF">  onNo() { </span><span style="color:#E06C75">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF"> }</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> style</span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF">{ </span><span style="color:#E06C75">fontSize</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">50</span><span style="color:#ABB2BF"> }></span><span style="color:#C678DD">${</span><span style="color:#E06C75">isHappy</span><span style="color:#C678DD"> ?</span><span style="color:#98C379"> "😀"</span><span style="color:#C678DD"> :</span><span style="color:#98C379"> "😥"</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
      {
        fileName: "AnswerButton.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> onClick</span><span style="color:#56B6C2">=</span><span style="color:#E5C07B">input</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">onYes</span><span style="color:#ABB2BF">></span><span style="color:#98C379">YES</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> onClick</span><span style="color:#56B6C2">=</span><span style="color:#E5C07B">input</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">onNo</span><span style="color:#ABB2BF">></span><span style="color:#98C379">NO</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAggBzQOhlATgawHswAaMNKAFwAskwB6AY0JjUIjgkoGd70scBYmWZdOlOgB4ANnEr0AltwASUDAE8ABAF5NlXAFc49AHwAdCJLQmUuOJvWEDm6mrTqA-JPrWLklBDcAO5wuABCBpSU7BaamuwAmnDcABQAlJogmkqqGjp6hvYAvrHxEAByhOmZ2SpuWroAZlDS3MUWpn5omtyU6rLaWY3slADKCgBecIiaAKwADJpFJgAkIDn1mh6aZmCAvBuAAHu7mjO7e4Cke7tF3r4QYEUk4NDwdAHBoRFR7Nh4RKTkVFoyCYLDYHC4vDeIXCkWiEB+Qn+oko4ikACNYewygBhaQKRj4bQKCBoSKYRLJEwJACio28GK+EHMlgZcJxeIJRJJZPYlRM5QA8vTMUyLPcALpAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/2-emit-to-parent/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "slot",
    files: [
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Click me!</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
      {
        fileName: "FunnyButton.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66">.$</span><span style="color:#ABB2BF">{</span><span style="color:#E06C75">funnyButton</span><span style="color:#ABB2BF">}></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#C678DD">${</span><span style="color:#E5C07B">input</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">renderBody</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">.</span><span style="color:#C678DD">module.css</span><span style="color:#ABB2BF">/{ </span><span style="color:#E06C75">funnyButton</span><span style="color:#ABB2BF"> }></span></span>\n<span class="line"><span style="color:#D19A66">  .funnyButton</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">    background: </span><span style="color:#56B6C2">rgba</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.4</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    color: </span><span style="color:#D19A66">#fff</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    padding: </span><span style="color:#D19A66">10</span><span style="color:#E06C75">px</span><span style="color:#D19A66"> 20</span><span style="color:#E06C75">px</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    font-size: </span><span style="color:#D19A66">30</span><span style="color:#E06C75">px</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    border: </span><span style="color:#D19A66">2</span><span style="color:#E06C75">px</span><span style="color:#D19A66"> solid</span><span style="color:#D19A66"> #fff</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    margin: </span><span style="color:#D19A66">8</span><span style="color:#E06C75">px</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    transform: </span><span style="color:#56B6C2">scale</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0.9</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    box-shadow: </span><span style="color:#D19A66">4</span><span style="color:#E06C75">px</span><span style="color:#D19A66"> 4</span><span style="color:#E06C75">px</span><span style="color:#56B6C2"> rgba</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.4</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    transition: transform </span><span style="color:#D19A66">0.2</span><span style="color:#E06C75">s</span><span style="color:#56B6C2"> cubic-bezier</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0.34</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">1.65</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.88</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.925</span><span style="color:#ABB2BF">) </span><span style="color:#D19A66">0</span><span style="color:#E06C75">s</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    outline: </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAggBzQOhlATgawHswAaMNKAFwAskwB6AY0JjUIjgkoGd70scBYmWZdOlOgB4AYgFcIEAJ4AhWZUrsAfAGEANgEtG+AATwAhJPpyFKtRoiaAOhDABfEuGjw61pavXs2HhEpORUtMhMLGwcXLy+tgEQQUKhopTiUgBGdoEAJCAAZvJ+uRCuThDGxpIF+hBoapi4nAAmcLjKhK2KrvSVljlJlc6S3JSKunDY3bJTmIzcvCDGxTb+9sYVztWYa6VJxiA71cZZUEYA5riE8q2IxriX5wAUAAwkxh9fn2+YACwASgA3CdqsxdIRcA8AMSFeGgqqnCitVr1S4PACMbzQAA9jAAmHG4xGnVbsSgAWm4+gAXnAHgBmYmk05ZKHtaGEvHGbiEAytYxwhFg0x4S71B4ADjxrOqlFwUAg3EKUJgD24jCgU3emAAnCDRezcdTqFBWoQAO4Pf48234p6vb7O34Aw1I+WK5X6Sj6dgPBVKlVqr6YAncYyMWRZQyUrJwWn6Dq6xn-T6YzAANgArK6pVLXXqCdnAV9uHLjLdKAYOA83qzXKN6ONJnBKm4ALpAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/3-slot/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "slot-fallback",
    files: [
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">></span><span style="color:#98C379">I got content!</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
      {
        fileName: "FunnyButton.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66">.$</span><span style="color:#ABB2BF">{</span><span style="color:#E06C75">funnyButton</span><span style="color:#ABB2BF">}></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#C678DD">${</span><span style="color:#E5C07B">input</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">renderBody</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span><span style="color:#98C379">No content found</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">.</span><span style="color:#C678DD">module.css</span><span style="color:#ABB2BF">/{ </span><span style="color:#E06C75">funnyButton</span><span style="color:#ABB2BF"> }></span></span>\n<span class="line"><span style="color:#D19A66">  .funnyButton</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">    background: </span><span style="color:#56B6C2">rgba</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.4</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    color: </span><span style="color:#D19A66">#fff</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    padding: </span><span style="color:#D19A66">10</span><span style="color:#E06C75">px</span><span style="color:#D19A66"> 20</span><span style="color:#E06C75">px</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    font-size: </span><span style="color:#D19A66">30</span><span style="color:#E06C75">px</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    border: </span><span style="color:#D19A66">2</span><span style="color:#E06C75">px</span><span style="color:#D19A66"> solid</span><span style="color:#D19A66"> #fff</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    margin: </span><span style="color:#D19A66">8</span><span style="color:#E06C75">px</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    transform: </span><span style="color:#56B6C2">scale</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0.9</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    box-shadow: </span><span style="color:#D19A66">4</span><span style="color:#E06C75">px</span><span style="color:#D19A66"> 4</span><span style="color:#E06C75">px</span><span style="color:#56B6C2"> rgba</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.4</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    transition: transform </span><span style="color:#D19A66">0.2</span><span style="color:#E06C75">s</span><span style="color:#56B6C2"> cubic-bezier</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0.34</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">1.65</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.88</span><span style="color:#ABB2BF">, </span><span style="color:#D19A66">0.925</span><span style="color:#ABB2BF">) </span><span style="color:#D19A66">0</span><span style="color:#E06C75">s</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    outline: </span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAggBzQOhlATgawHswAaMNKAFwAskwB6AY0JjUIjgkoGd70scBYmWZdOlOgB4AYgFcIEAJ4AhWZUrt6APgA6EGfKWr17LQEkABAHNClC6MriAhJPpyFKtRoi6IYAL4k4NDwdO5GXuzYeESk5FS0yEwsbBxcvOGeJhDRQnEO4lIARpE5ACQgAGaGWd7+vhYWkhUAlhBoapi4nAAmcLjKhD2K9XqNjZLcFD4AcoT27I5cFpWE8j2uU1A+Y03aeq4l2b4H3JSKADZw2EOyV5iM3LwgKzXG3hajEI2Y1R7v7AsIF2jSKUEY+CsuDWEB6iAsuCsYIAFAAGEgWdGYjGozAAFgAlABuEELC6EXDwgDElVpJO+4woPR6bSs8IAjKi0AAPCwAJi53Pp4xWiwAtNwWgAvODwgDMguF4yKFL6lP5PIs3EIFxaPQsNLppMEVja8IAHDylY1KLhttxVrgYPDuIwoFc0ZgAJzE0kq7kS6hQHqEADu8LxmsjvMRKKx8Zx+N9DJtdogksoLXY8Nt9sdMExmD53HssiKLUYYqKcClLX6nrleIx7MwADYAKyJ83mxNevntgmY7jWixrSi6jjw1FK-wHehnS5wXwBAC6QA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/4-slot-fallback/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "context",
    files: [
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">user</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  id: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">  username: </span><span style="color:#98C379">"unicorn42"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">  email: </span><span style="color:#98C379">"unicorn42@example.com"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">}/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">const</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">updateUsername</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">newUsername</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E06C75">  user</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> { ...</span><span style="color:#E06C75">user</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">username</span><span style="color:#ABB2BF">: </span><span style="color:#E06C75">newUsername</span><span style="color:#ABB2BF"> };</span></span>\n<span class="line"><span style="color:#ABB2BF">}/></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Welcome back, </span><span style="color:#C678DD">${</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">set=</span><span style="color:#ABB2BF">{ ...</span><span style="color:#E06C75">user</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">updateUsername</span><span style="color:#ABB2BF"> }></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">UserProfile</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#56B6C2">set</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
      {
        fileName: "UserProfile.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">get</span><span style="color:#ABB2BF">/{ </span><span style="color:#E06C75">username</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">email</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">updateUsername</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#98C379"> "App"</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">></span><span style="color:#98C379">My Profile</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Username: </span><span style="color:#C678DD">${</span><span style="color:#E06C75">username</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Email: </span><span style="color:#C678DD">${</span><span style="color:#E06C75">email</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> onClick() { </span><span style="color:#61AFEF">updateUsername</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"Jane"</span><span style="color:#ABB2BF">) }></span></span>\n<span class="line"><span style="color:#98C379">    Update username to Jane</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAggBzQOhlATgawHswAaMNKAFwAskwB6AY0JjUIjgkoGd70scBYmWZdOlOgB4ANnEr0Artzi4ABAF5VIADoRVqgJYATRKoCMJXfqUro8U9rAKIB5rggAWAEyPLe1XA4BtIOTi5unl4AAnAAHrBospjMML66AL70AHy6kqLc8gpoRlRwAKrK7rBwABQcAO4VttUAlFpWqjZqmiCqmP1dJJ2VdnCmDU1V8KrpANwZ2bq51GZZAOpw0ilwqgBGUIz4QwAkIF2YXaPpkvQrORCSypTqvf0XlUNFJZTlI9Uz930kkmAAVcIQAGbBHaLB70J73MDpEjgUZ0UHgqFJQREUjkKi0ZBMFhsDhcXgYyHQ7B4XEidg-LhSADmcnovUu1SGgSgwU+xVKk1GMw0qkc-EcsMkRgMADdAapJNQvFkALIAT1UYKpshuyoVkjQWSF1VMp058Gu9CNHUNWQAokEQqpTjzglabf5JLsFJRKOxVOwAMLSVz4GptDkCn4m+A1RwAKSgHEcbXSCv0ZWjOwtO39qiTKa99B9fvY9xuMvluiRAF0gA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/5-context/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "input-text",
    files: [
      {
        fileName: "InputHello.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">text</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Hello world"</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">${</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">:</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAkhADgVwC4Ak4A2BA9gHQxQBOA1sWADRjpTYAWSYA9AMbEzrEIcCNgDOnNFjyES5KrQZheI4dg4AeAnGydscAB7YABAF4jAHTD4ixIwHdilAgBNLnAHzmI69O4AkIHqGAL7qnL5e6gCWGDhGAG5QBJhwiCZBOp4QYMEAukA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/1-input-text/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "checkbox",
    files: [
      {
        fileName: "IsAvailable.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66">#is-available</span></span>\n<span class="line"><span style="color:#D19A66">  type</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"checkbox"</span></span>\n<span class="line"><span style="color:#D19A66">  checked</span><span style="color:#ABB2BF">:</span><span style="color:#56B6C2">=</span><span style="color:#E5C07B">input</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isAvailable</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"is-available"</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Is available</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAkgZwIIDcoEsA2UARvnAHQxQBOA1gPZgA0YADlAC4AWSYA9AMZ0YLOhDgR2aXumx5CJcpVoNmgiePY8APLggsAruwDEuNAFooOAsVIAdCAAIH7AJ4s4AXlth+nOPxoiOgAPb3snX38aOAATRA9dA3YyU1lrBXteAD57LXk4fAcAMzoqLzBTCyt5OzAs9AdLORs4LV58-ByIMABfAF0gA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/2-checkbox/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "radio",
    files: [
      {
        fileName: "PickPill.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">picked</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">const</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">handleChange</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">event</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E06C75">  picked</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> event</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">target</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}/></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Picked: </span><span style="color:#C678DD">${</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66">#blue-pill</span></span>\n<span class="line"><span style="color:#D19A66">  type</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"radio"</span></span>\n<span class="line"><span style="color:#D19A66">  checked</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">picked</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "blue"</span></span>\n<span class="line"><span style="color:#D19A66">  value</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"blue"</span></span>\n<span class="line"><span style="color:#ABB2BF">  onChange</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">handleChange</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Blue pill</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66">#red-pill</span></span>\n<span class="line"><span style="color:#D19A66">  type</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"radio"</span></span>\n<span class="line"><span style="color:#D19A66">  checked</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">picked</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "red"</span></span>\n<span class="line"><span style="color:#D19A66">  value</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"red"</span></span>\n<span class="line"><span style="color:#ABB2BF">  onChange</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">handleChange</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Red pill</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGACgSwMYGt0BtcB0MUATlgPZgA0YADlAC4AWSYA9BuTLeRHBAwDObdNjyFiZSjU4D+DVgB5ccBm1qYscACYACALy6AOmBI6TbAHxGIi2YLVMoEbSoDCTiAHM4ACjgAbvIAlLogNrq6Gtg6BrqB8gQMpD4MBAFQuACucADcNgC+VjY2itpoAZaiWtqIugAkINE1BYps5ZWlaBC0WQwAxABG2XAAtBr4EboMAJ60cPomJFDl5CZTGExwMdr6zbH6h8ZgwznrEJEZI4snI+eRvB7OPvqernBP3nA2xba4UIM4LhdAAzcgkG6nMYTXAmSwAIRGUTQ+Da-0BuGsEC6PT6-TM2nGKNhF2mcwWSxWaDWYA2Wx2e00ByOS3MtNJVxyNwJ910j08Lze7gF3wgv2UAKBoPB3J0RMmYEsACVYjC0ZLMTYwAUALpAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/3-radio/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "select",
    files: [
      {
        fileName: "ColorSelect.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">static const</span><span style="color:#E5C07B"> colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">3</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">4</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"gray"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">isDisabled</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">true</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">let</span><span style="color:#ABB2BF">/</span><span style="color:#E5C07B">selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF"> onChange(</span><span style="color:#E06C75">event</span><span style="color:#ABB2BF">) { </span><span style="color:#E06C75">selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> event</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">target</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF"> }></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#56B6C2">for</span><span style="color:#ABB2BF">|{ </span><span style="color:#E06C75;font-style:italic">id</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">isDisabled</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">text</span><span style="color:#ABB2BF"> }| </span><span style="color:#D19A66">of</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">colors</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">option</span><span style="color:#D19A66"> value</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">id</span><span style="color:#D19A66"> disabled</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">isDisabled</span><span style="color:#D19A66"> selected</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">id</span><span style="color:#56B6C2"> ===</span><span style="color:#E06C75"> selectedColorId</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">      ${</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#56B6C2">for</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAwgewDZoE4GU4ZwDGALgHQxTYDWaYANGAA5QkAWSYA9EWjE2ghwIJAM5d0WPAWLlKNOo14jhJTqJKsAlkQAEyjfsw5RugLy7gAHQi7dIXVoAmiXQEZ6uknAAeJV1Zg2HBOgboAvvQ2dg7OrgBMnt5+AWAARhgArnBhkdH2ji66AMxJvv66gQDmwcK5UbYFcboALGUplWA1UACegZ5aogAig1AZIa4k2NkRDQC6ANw2ADyEJFyiMqQhkjgAkk7muvFcAHw2K5uEpLqCKGxQEFVwABRwAG6qAJQFV7I7xmwByOH1UZE02Ge5HeUCycAi50aywAZjgAD6xJwDYajcZYrzlCJo27Isy8KSiRF2OzLNBMEhaQS6GFwszOXROXGEJxsnGiMbc3R-bY89lmcVCrbeJy7IFOKnUuwAEhAyRI4XyNK4dIZggVyy4qOwiINwpIiLA4TmQA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/4-select/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "render-app",
    files: [
      {
        fileName: "index.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic">&#x3C;!DOCTYPE html></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">App</span><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Hello world</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAlhAJnAHgOhlAJwGsB7MAGjAAcoAXACyTAHoBjEmKkiOCWgZ2ZpMufMTKV2fXrSYAeAIQARAPIBhACoBNAAoBRAAT1aMADYA+ADoQ5xs1YgGDcgIJUqzB3OZ2L1sAC+5ODQ8ExuVHiEpBTUdIzIbBxcPHyCEVHisVK0MvL0AIzmABJwpqYkBgDuJASm6N6FDoEAukA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/1-render-app/marko",
  },
  {
    frameworkId: "marko",
    snippetId: "fetch-data",
    files: [
      {
        fileName: "App.marko",
        ext: "marko",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#56B6C2">await</span><span style="color:#ABB2BF">(</span><span style="color:#61AFEF">fetch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"https://randomuser.me/api/?results=3"</span><span style="color:#ABB2BF">).</span><span style="color:#61AFEF">then</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">res</span><span style="color:#C678DD"> =></span><span style="color:#E5C07B"> res</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">json</span><span style="color:#ABB2BF">()))></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#D19A66">@placeholder</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">Fetching users...</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#D19A66">@placeholder</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#D19A66">@catch</span><span style="color:#ABB2BF">|</span><span style="color:#E06C75;font-style:italic">error</span><span style="color:#ABB2BF">|></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#98C379">An error occurred while fetching users</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#D19A66">@catch</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#D19A66">@then</span><span style="color:#ABB2BF">|{ </span><span style="color:#E06C75">results</span><span style="color:#ABB2BF">: </span><span style="color:#E06C75;font-style:italic">users</span><span style="color:#ABB2BF"> }|></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#56B6C2">for</span><span style="color:#ABB2BF">|{ </span><span style="color:#E06C75;font-style:italic">picture</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">name</span><span style="color:#ABB2BF"> }| </span><span style="color:#D19A66">of</span><span style="color:#56B6C2">=</span><span style="color:#E06C75">users</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">          &#x3C;</span><span style="color:#E06C75">img</span><span style="color:#D19A66"> src</span><span style="color:#56B6C2">=</span><span style="color:#E5C07B">picture</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">thumbnail</span><span style="color:#D19A66"> alt</span><span style="color:#56B6C2">=</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">          &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">${</span><span style="color:#E5C07B">name</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">first</span><span style="color:#C678DD">}</span><span style="color:#C678DD"> ${</span><span style="color:#E5C07B">name</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">last</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;/</span><span style="color:#56B6C2">for</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#D19A66">@then</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#56B6C2">await</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
      },
    ],
    playgroundURL:
      "https://markojs.com/playground/#NobwRAdghgtgpmAXGAggBzQOhlATgawHswAaMNKAFwAskwB6AY0JjUIjgkoGd70scBYmWZdOlOgB4oAdygBLSgAoAZnEqNqSgDphqlSmm6J69XFAgATFgFducXNjj0oaefQD8uONxsAbHgBeAGZdAEpMGk4lb24AAkCAPjjYzAArbnYlMJzE7Qg4uMkAATQ-KEY4akI-Swc8gsKitESAMXVNeQgAczi7B25MIcl6FvzCkdLyyura+vGi4sYqTQAfB1xCXFWGpubElAKNrbjCRkYbXG9LOJlqeT84OLUNe56++1xuEbHGyeXXrtFlEIKsQCkfP4eIgPgM4gBfHYLCb+IF7SQqLZguJuRiUS5wEhxaDwBGrU4qQL9L5ovZFPzyWl0oryGC9bi4RiBXH47yRag2GAAI2gDziUACgV01N0TLpkhaABIQCS4JgVPIvpR4XFlarMOVuNqfnKJvQGXKRpjcLSRqiFpMQQ0RrIFJQGmB4QBdIA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/2-fetch-data/marko",
  },
];
