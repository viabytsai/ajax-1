getCSS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status === 200){
            //创建style标签
            const style = document.createElement('style')
            style.innerHTML=request.response
            document.head.appendChild(style) 
        }
    request.send()
    }
}

getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/2.js")
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status === 200){
            //创建style标签
            const script = document.createElement('script')
            script.innerHTML=request.response
            document.head.appendChild(script) 
        }
    }
    request.send()
}

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status === 200){
            //创建style标签
            const div = document.createElement('div')
            div.innerHTML=request.response
            document.body.appendChild(div) 
        }
    }
    request.send()
}

getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
let n = 1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n+1}`)
    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if(request.readyState ===4 && request.status === 200){
            const array = JSON.parse(request.response)//将json字符串转为对象
            array.forEach(element => {
                const li = document.createElement("li");
                li.textContent = element.id;
                xxx.appendChild(li);
            });
            n+=1
        }
    }
    request.send()
}