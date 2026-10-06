const pages=["home","chat","create","schedule","analytics"];
function showPage(id){pages.forEach(p=>document.getElementById(p).classList.toggle("active",p===id));scrollTo(0,0)}
function toggleTheme(){document.body.classList.toggle("light")}
function sendChat(){
 const input=document.getElementById("chatInput"), text=input.value.trim(); if(!text)return;
 addBubble(text,"user"); input.value="";
 setTimeout(()=>addBubble("I can prepare the content plan, caption, hashtags and publishing workflow. Social publishing will require connecting the official platform APIs first.","ai"),400);
}
function addBubble(text,type){const box=document.getElementById("messages");const d=document.createElement("div");d.className="bubble "+type;d.textContent=text;box.appendChild(d);box.scrollTop=box.scrollHeight}
function generateContent(){
 const topic=document.getElementById("topic").value, platform=document.getElementById("platform").value;
 const goal=document.getElementById("goal").value, result=document.getElementById("result");
 result.classList.remove("hidden");
 result.innerHTML=`<h3>✨ AI Content Plan</h3>
 <p><b>Hook:</b> Wait for the final crush! 🪨💥</p>
 <p><b>Title:</b> ${topic} 🤯🔥</p>
 <p><b>Platform:</b> ${platform}</p>
 <p><b>Goal:</b> ${goal}</p>
 <p><b>Caption:</b> Watch this massive ${topic.toLowerCase()} and wait for the final shot!</p>
 <p><b>Hashtags:</b> #StoneCrusher #JawCrusher #Crushing #Engineering #Viral</p>
 <p><b>Video prompt:</b> Cinematic close-up of ${topic}, realistic industrial stone crushing plant, dramatic impact, detailed machinery, fast-paced vertical social video.</p>
 <button class="primary" onclick="showPage('schedule')">Continue to Schedule</button>`;
}
