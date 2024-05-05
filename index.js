// @ts-nocheck
window.onload = function () {
        const btn = document.querySelector('#btn')
        btn.addEventListener('click', (e) => {
               
                const peso = document.querySelector('#peso').value
                const altura = document.querySelector('#altura').value
                const res = document.getElementsByClassName('res')[ 0 ]
                res.textContent = ''
                let imc = 0
                let saida = ''
                if (String(peso).length == 0 || String(altura).length == 0) {
                        window.alert('Preencha os campos em falta')
                } else {
                                imc = peso / (altura * altura)
                                if (imc <= 16.9) {
                                        saida = 'Peso muito abaixo da média'
                                } else if (imc >= 17 && imc <= 18.4) {
                                        saida = 'Peso abaixo da média'
                                        
                                } else if (imc >= 18.5 && imc <= 24.9) {
                                        saida = 'Peso Normal'
                                }
                                else if (imc >= 25 && imc <= 29.9) {
                                        saida = 'Acima do Peso'
                                }else if (imc >= 30 && imc <= 34.9) {
                                        saida = 'Obesidade do  I grau'
                                }else if (imc >= 35 && imc <= 40) {
                                        saida = 'Obesidade do  II grau'
                                } else {
                                        saida = 'Obesidade do  III grau'
                                }
                                res.innerHTML = `<p>IMC = ${imc}</p> <p>${saida}</p>`
                        
                }
        })
}