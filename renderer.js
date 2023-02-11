const func = async () => {
    const information = document.getElementById("info");
    const response = await window.versions.ping()
    // alert(response)
    console.log(response) // 打印 'pong'
    information.innerText = response
    // information.innerText = `
    //         本应用正在使用 Chrome (v${versions.chrome()}), 
    //         Node.js (v${versions.node()}), 
    //         和 Electron (v${versions.electron()})
    //     `;
  }
  
  func()
