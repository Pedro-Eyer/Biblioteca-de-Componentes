
// Modais 
document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector(".open-modal");
    const closeModalButton = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");

    // Abrir o modal
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    // Fechar o modal
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Fechar o modal ao clicar no overlay
    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const openModal2Button = document.querySelector(".open-modal-2");
    const closeModal2Button = document.querySelector(".close-modal-2");
    const modal2 = document.querySelector(".modal-2");
    const overlay2 = document.querySelector(".modal-overlay-2");

    // Abrir o Modal 2
    openModal2Button.addEventListener("click", () => {
        modal2.style.display = "block";
        overlay2.style.display = "block";
    });

    // Fechar o Modal 2
    closeModal2Button.addEventListener("click", () => {
        modal2.style.display = "none";
        overlay2.style.display = "none";
    });

    // Fechar o Modal 2 ao clicar no overlay
    overlay2.addEventListener("click", () => {
        modal2.style.display = "none";
        overlay2.style.display = "none";
    });
});

// popup dos codigos
document.addEventListener("DOMContentLoaded", () => {
    // Dados para cada section
    const sections = [
        {
            title: "Botões",
            description: "Os botões são componentes reutilizáveis com diferentes estilos para ações específicas.",
            examples: [
                {
                    label: "Salvar",
                    html: "<button class='btn-primary'>Salvar</button>",
                    css: `
        .btn-primary {
            background-color: rgb(121, 82, 179);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }`,
                    js: null,
                },
                {
                    label: "Cancelar",
                    html: "<button class='btn-secondary'>Cancelar</button>",
                    css: `
        .btn-secondary {
            background-color: white;
            color: rgb(121, 82, 179);
            border: 2px solid rgb(121, 82, 179);
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }`,
                    js: null,
                },
                {
                    label: "Download",
                    html: "<button class='btn-download'>Download</button>",
                    css: `
        .btn-download {
            background-color: white;
            color: rgb(108, 117, 125);
            border: 1px solid rgb(108, 117, 125);
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .btn-download:hover {
            background-color: rgb(108, 117, 125);
            color: white;
        }
        
        .btn-download:active {
            transform: scale(0.95);
            background-color: rgb(90, 100, 110);
            color: white;
        }`,
                    js: null,
                },
                {
                    label: "Sign Up",
                    html: "<button class='btn-sign'>Sign Up</button>",
                    css: `
        .btn-sign {
            background-color: rgb(255, 216, 20);
            border-radius: 15px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            color: black;
            font-weight: bold;
        }
        
        .btn-sign:hover {
            background-color: rgb(245, 205, 3);
        }
        
        .btn-sign:active {
            transform: scale(0.9);
            background-color: rgb(230, 190, 10);
            box-shadow: 0 0 10px rgb(255, 216, 20);
        }`,
                    js: null,
                },
            ],
        },
        {
            title: "Modais",
            description: "Os modais são usados para exibir mensagens ou interações em uma sobreposição.",
            examples: [
                {
                    label: "Abrir Modal 1",
                    html: "<button class='btn-modal-action'>Abrir Modal 1</button>",
                    css: `
        .btn-modal-action {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }`,
                    js: `
        document.querySelector('.btn-modal-action').addEventListener('click', () => {
            document.querySelector('.modal').style.display = 'block';
        });`,
                },
                {
                    label: "Abrir Modal 2",
                    html: "<button class='btn-modal-2'>Abrir Modal 2</button>",
                    css: `
        .btn-modal-2 {
            background-color: #ff5722;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .btn-modal-2:hover {
            background-color: #e64a19;
        }
        
        .btn-modal-2:active {
            transform: scale(0.95);
            background-color: #d84315;
        }`,
                    js: `
        document.querySelector('.btn-modal-2').addEventListener('click', () => {
            document.querySelector('.modal-2').style.display = 'block';
        });`,
                },
            ],
        },
        {
            title: "Tooltips",
            description: "Os tooltips exibem informações adicionais ao passar o mouse sobre um elemento.",
            examples: [
                {
                    label: "Tooltip Acima",
                    html: "<p class='tooltip tooltip-top' data-tooltip='Tooltip acima'>Passe o mouse aqui</p>",
                    css: `
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        
        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%; /* Exibe acima */
            left: 50%;
            transform: translateX(-50%);
            background-color: #4caf50;
            color: white;
            padding: 5px;
            border-radius: 4px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
        }
        
        .tooltip:hover::after {
            opacity: 1;
            visibility: visible;
        }`,
                    js: null,
                },
                {
                    label: "Tooltip Direita",
                    html: "<p class='tooltip tooltip-right' data-tooltip='Tooltip à direita'>Passe o mouse aqui</p>",
                    css: `
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        
        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            top: 50%;
            left: 100%; /* Exibe à direita */
            transform: translateY(-50%);
            background-color: #4caf50;
            color: white;
            padding: 5px;
            border-radius: 4px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
        }
        
        .tooltip:hover::after {
            opacity: 1;
            visibility: visible;
        }`,
                    js: null,
                },
                {
                    label: "Tooltip Esquerda",
                    html: "<p class='tooltip tooltip-left' data-tooltip='Tooltip à esquerda'>Passe o mouse aqui</p>",
                    css: `
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        
        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            top: 50%;
            right: 100%; /* Exibe à esquerda */
            transform: translateY(-50%);
            background-color: #4caf50;
            color: white;
            padding: 5px;
            border-radius: 4px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
        }
        
        .tooltip:hover::after {
            opacity: 1;
            visibility: visible;
        }`,
                    js: null,
                },
                {
                    label: "Tooltip Abaixo",
                    html: "<p class='tooltip tooltip-bottom' data-tooltip='Tooltip abaixo'>Passe o mouse aqui</p>",
                    css: `
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        
        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            top: 100%; /* Exibe abaixo */
            left: 50%;
            transform: translateX(-50%);
            background-color: #4caf50;
            color: white;
            padding: 5px;
            border-radius: 4px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
        }
        
        .tooltip:hover::after {
            opacity: 1;
            visibility: visible;
        }`,
                    js: null,
                },
            ],
        },
        {
            title: "Switches",
            description: "Os switches permitem alternar entre estados ativado e desativado.",
            examples: [
                {
                    label: "Switch Modelo 1",
                    html: "<label class='switch switch-model-1'><input type='checkbox'><span class='slider'></span></label>",
                    css: `
        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 25px;
        }
        
        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.4s;
            border-radius: 25px;
        }
        
        .slider:before {
            position: absolute;
            content: "";
            height: 19px;
            width: 19px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
        }
        
        input:checked + .slider {
            background-color: #4caf50;
        }
        
        input:checked + .slider:before {
            transform: translateX(25px);
        }`,
                    js: null,
                },
                {
                    label: "Switch Modelo 2",
                    html: "<label class='switch switch-model-2'><input type='checkbox' checked><span class='slider'></span></label>",
                    css: `
        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 30px;
        }
        
        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #e0e0e0;
            transition: 0.4s;
            border-radius: 30px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        }
        
        .slider:before {
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        input:checked + .slider {
            background-color: #2196f3;
        }
        
        input:checked + .slider:before {
            transform: translateX(30px);
        }`,
                    js: null,
                },
            ],
        },
        {
            title: "Spinners",
            description: "Os spinners indicam que uma ação está em andamento.",
            examples: [
                {
                    label: "Spinner Normal",
                    html: "<div class='spinner'></div>",
                    css: `
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #4caf50;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }`,
                    js: null,
                },
                {
                    label: "Spinner Reverso",
                    html: "<div class='spinner-reverse'></div>",
                    css: `
        .spinner-reverse {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-bottom: 5px solid #ff5722;
            border-radius: 50%;
            animation: spin-reverse 1s linear infinite;
        }
        
        @keyframes spin-reverse {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-360deg);
            }
        }`,
                    js: null,
                },
            ],
        },
        {
            title: "Dropdowns",
            description: "Os dropdowns exibem uma lista de opções ao clicar em um botão.",
            examples: [
                {
                    label: "Menu Lateral",
                    html: `
        <div class='dropdown dropdown-side'>
            <button class='dropdown-button'>Menu Lateral <span class='caret'>&#9654;</span></button>
            <ul class='dropdown-menu'>
                <li><a href='#'>Opção A</a></li>
                <li><a href='#'>Opção B</a></li>
                <li><a href='#'>Opção C</a></li>
            </ul>
        </div>`,
                    css: `
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        .dropdown-button {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .dropdown-menu {
            display: none;
            position: absolute;
            top: 0;
            left: 100%; /* Exibe ao lado */
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            list-style: none;
            padding: 10px 0;
            margin: 0;
        }
        
        .dropdown:hover .dropdown-menu {
            display: block;
        }
        
        .dropdown-menu li {
            padding: 5px 20px;
        }
        
        .dropdown-menu li:hover {
            background-color: #f4f4f4;
        }`,
                    js: null,
                },
                {
                    label: "Menu Para Baixo",
                    html: `
        <div class='dropdown dropdown-down'>
            <button class='dropdown-button'>Menu Para Baixo <span class='caret'>&#9660;</span></button>
            <ul class='dropdown-menu'>
                <li><a href='#'>Opção 1</a></li>
                <li><a href='#'>Opção 2</a></li>
                <li><a href='#'>Opção 3</a></li>
            </ul>
        </div>`,
                    css: `
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        .dropdown-button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%; /* Exibe abaixo */
            left: 0;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            list-style: none;
            padding: 10px 0;
            margin: 0;
        }
        
        .dropdown:hover .dropdown-menu {
            display: block;
        }
        
        .dropdown-menu li {
            padding: 5px 20px;
        }
        
        .dropdown-menu li:hover {
            background-color: #f4f4f4;
        }`,
                    js: null,
                },
            ],
        },
        {
            title: "Cards",
            description: "Os cards são usados para exibir informações organizadas em blocos.",
            examples: [
                {
                    label: "Card 1",
                    html: "<div class='card card-1'><h3>Card 1</h3><p>Este é um card com uma borda lateral verde e um estilo limpo e moderno.</p></div>",
                    css: `
        .card {
            padding: 20px;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .card-1 {
            background-color: #f9f9f9;
            border-left: 5px solid #4caf50;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
        }
        
        .card-1 h3 {
            color: #4caf50;
            font-size: 18px;
            margin-bottom: 10px;
        }
        
        .card-1 p {
            color: #333;
            font-size: 14px;
        }`,
                    js: null,
                },
                {
                    label: "Card 2",
                    html: "<div class='card card-2'><h3>Card 2</h3><p>Este card possui um fundo com gradiente e texto centralizado.</p></div>",
                    css: `
        .card-2 {
            background: linear-gradient(135deg, #4caf50, #66bb6a);
            color: white;
            text-align: center;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-family: 'Roboto', sans-serif;
        }
        
        .card-2 h3 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        
        .card-2 p {
            font-size: 14px;
        }`,
                    js: null,
                },
                {
                    label: "Card 3",
                    html: "<div class='card card-3'><h3>Card 3</h3><p>Este card possui um gradiente vibrante e um ícone decorativo.</p></div>",
                    css: `
        .card-3 {
            background: linear-gradient(135deg, #ff5722, #ff8a50);
            color: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            font-family: 'Roboto', sans-serif;
            position: relative;
            overflow: hidden;
            text-align: center;
        }
        
        .card-3::before {
            content: "★"; /* Ícone decorativo */
            position: absolute;
            top: -20px;
            right: -20px;
            font-size: 80px;
            color: rgba(255, 255, 255, 0.2); /* Ícone translúcido */
            transform: rotate(15deg);
        }
        
        .card-3 h3 {
            font-size: 22px;
            margin-bottom: 10px;
            color: #fff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .card-3 p {
            font-size: 14px;
            color: #fce4ec;
        }`,
                    js: null,
                },
            ],
        },
        {
            title: "Barras de Progresso",
            description: "As barras de progresso indicam o andamento de uma tarefa.",
            examples: [
                {
                    label: "Progresso Básico",
                    html: `
        <div class='progress-bar progress-bar-primary'>
            <div class='progress' style='width: 70%;'>70%</div>
        </div>`,
                    css: `
        .progress-bar {
            background-color: #f4f4f4;
            border-radius: 8px;
            overflow: hidden;
            height: 20px;
            width: 100%;
            margin-bottom: 10px;
        }
        
        .progress {
            background-color: #4caf50;
            height: 100%;
            text-align: center;
            color: white;
            line-height: 20px;
            font-size: 14px;
        }`,
                    js: null,
                },
                {
                    label: "Progresso Listrado",
                    html: `
        <div class='progress-bar progress-bar-striped'>
            <div class='progress' style='width: 50%;'>50%</div>
        </div>`,
                    css: `
        .progress-bar-striped .progress {
            background: repeating-linear-gradient(
                45deg,
                #4caf50,
                #4caf50 10px,
                #66bb6a 10px,
                #66bb6a 20px
            );
            height: 100%;
            text-align: center;
            color: white;
            line-height: 20px;
            font-size: 14px;
        }`,
                    js: null,
                },
                {
                    label: "Progresso Animado",
                    html: `
        <div class='progress-bar progress-bar-animated'>
            <div class='progress' style='width: 30%;'>30%</div>
        </div>`,
                    css: `
        .progress-bar-animated .progress {
            background-color: #4caf50;
            height: 100%;
            text-align: center;
            color: white;
            line-height: 20px;
            font-size: 14px;
            animation: progress-animation 2s infinite;
        }
        
        @keyframes progress-animation {
            0% {
                background-color: #4caf50;
            }
            50% {
                background-color: #66bb6a;
            }
            100% {
                background-color: #4caf50;
            }
        }`,
                    js: null,
                },
                {
                    label: "Progresso com Gradiente",
                    html: `
        <div class='progress-bar progress-bar-gradient'>
            <div class='progress' style='width: 90%;'>90%</div>
        </div>`,
                    css: `
        .progress-bar-gradient .progress {
            background: linear-gradient(90deg, #4caf50, #66bb6a);
            height: 100%;
            text-align: center;
            color: white;
            line-height: 20px;
            font-size: 14px;
        }`,
                    js: null,
                },
            ],
        },
    ];

    // Elementos do popup
    const docPopup = document.querySelector(".doc-popup");
    const docOverlay = document.querySelector(".doc-popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const exampleButtonsContainer = document.getElementById("example-buttons");
    const codeDisplay = document.getElementById("code-display");
    const copyCodeButton = document.querySelector(".copy-code-btn");
    const closeDocButton = document.querySelector(".close-doc");

    // Função para abrir o popup
    function openPopup(section) {
        popupTitle.textContent = section.title;
        popupDescription.textContent = section.description;

        // Limpa os botões de exemplo anteriores
        exampleButtonsContainer.innerHTML = "";

        // Adiciona os novos botões de exemplo
        section.examples.forEach((example) => {
            const button = document.createElement("button");
            button.textContent = example.label;
            button.className = "example-btn";
            button.addEventListener("click", () => {
                // Atualiza o conteúdo do espaço de código
                document.getElementById("code-html").textContent = example.html || "Nenhum código HTML disponível.";
                document.getElementById("code-css").textContent = example.css || "Nenhum código CSS disponível.";
                document.getElementById("code-js").textContent = example.js || "Nenhum código JavaScript disponível.";
                codeDisplay.textContent = example.code;
            });
            exampleButtonsContainer.appendChild(button);
        });


        // Exibe o popup e o overlay
        docPopup.classList.add("show");
        docOverlay.classList.add("show");
    }

    // Função para fechar o popup
    function closePopup() {
        docPopup.classList.remove("show");
        docOverlay.classList.remove("show");
    }

    // Adiciona eventos para abrir o popup ao clicar nos títulos
    const titleButtons = document.querySelectorAll(".title-button");
    titleButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (sections[index]) {
                openPopup(sections[index]);
            } else {
                console.error(`Nenhuma seção encontrada para o índice ${index}`);
            }
        });
    });

    // Adiciona evento para fechar o popup
    closeDocButton.addEventListener("click", closePopup);
    docOverlay.addEventListener("click", closePopup);

    // Copiar o código exibido
    copyCodeButton.addEventListener("click", () => {
        const codeToCopy = codeDisplay.textContent;

        // Cria um elemento temporário para copiar o texto
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = codeToCopy.trim();
        document.body.appendChild(tempTextArea);

        // Seleciona e copia o texto
        tempTextArea.select();
        document.execCommand("copy");

        // Remove o elemento temporário
        document.body.removeChild(tempTextArea);

        // Feedback visual
        copyCodeButton.textContent = "Copiado!";
        setTimeout(() => {
            copyCodeButton.textContent = "Copiar Código";
        }, 2000);
    });
});



