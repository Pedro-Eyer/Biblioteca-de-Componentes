
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
                { label: "Salvar", code: "<button class='btn-primary'>Salvar</button>" },
                { label: "Cancelar", code: "<button class='btn-secondary'>Cancelar</button>" },
                { label: "Download", code: "<button class='btn-download'>Download</button>" },
                { label: "Sign Up", code: "<button class='btn-sign'>Sign Up</button>" },
            ],
        },
        {
            title: "Modais",
            description: "Os modais são usados para exibir mensagens ou interações em uma sobreposição.",
            examples: [
                { label: "Abrir Modal", code: "<button class='btn-modal-action'>Abrir Modal</button>" },
                { label: "Fechar Modal", code: "<button class='btn-modal-action close-modal'>Fechar Modal</button>" },
            ],
        },
        {
            title: "Tooltips",
            description: "Os tooltips exibem informações adicionais ao passar o mouse sobre um elemento.",
            examples: [
                { label: "Tooltip Acima", code: "<p class='tooltip tooltip-top' data-tooltip='Tooltip acima'>Passe o mouse aqui</p>" },
                { label: "Tooltip Direita", code: "<p class='tooltip tooltip-right' data-tooltip='Tooltip à direita'>Passe o mouse aqui</p>" },
                { label: "Tooltip Esquerda", code: "<p class='tooltip tooltip-left' data-tooltip='Tooltip à esquerda'>Passe o mouse aqui</p>" },
                { label: "Tooltip Abaixo", code: "<p class='tooltip tooltip-bottom' data-tooltip='Tooltip abaixo'>Passe o mouse aqui</p>" },
            ],
        },
        {
            title: "Switches",
            description: "Os switches permitem alternar entre estados ativado e desativado.",
            examples: [
                { label: "Switch Modelo 1", code: "<label class='switch switch-model-1'><input type='checkbox'><span class='slider'></span></label>" },
                { label: "Switch Modelo 2", code: "<label class='switch switch-model-2'><input type='checkbox' checked><span class='slider'></span></label>" },
            ],
        },
        {
            title: "Spinners",
            description: "Os spinners indicam que uma ação está em andamento.",
            examples: [
                { label: "Spinner Normal", code: "<div class='spinner'></div>" },
                { label: "Spinner Reverso", code: "<div class='spin-reverse'></div>" },
            ],
        },
        {
            title: "Dropdowns",
            description: "Os dropdowns exibem uma lista de opções ao clicar em um botão.",
            examples: [
                { label: "Menu Lateral", code: "<div class='dropdown dropdown-side'><button class='dropdown-button'>Menu Lateral <span class='caret'>&#9654;</span></button><ul class='dropdown-menu'><li><a href='#'>Opção A</a></li><li><a href='#'>Opção B</a></li><li><a href='#'>Opção C</a></li></ul></div>" },
                { label: "Menu Para Baixo", code: "<div class='dropdown dropdown-down'><button class='dropdown-button'>Menu Para Baixo <span class='caret'>&#9660;</span></button><ul class='dropdown-menu'><li><a href='#'>Opção 1</a></li><li><a href='#'>Opção 2</a></li><li><a href='#'>Opção 3</a></li></ul></div>" },
            ],
        },
        {
            title: "Cards",
            description: "Os cards são usados para exibir informações organizadas em blocos.",
            examples: [
                { label: "Card 1", code: "<div class='card card-1'><h3>Card 1</h3><p>Descrição breve do conteúdo do card.</p></div>" },
                { label: "Card 2", code: "<div class='card card-2'><h3>Card 2</h3><p>Descrição breve do conteúdo do card.</p></div>" },
                { label: "Card 3", code: "<div class='card card-3'><h3>Card 3</h3><p>Descrição breve do conteúdo do card.</p></div>" },
            ],
        },
        {
            title: "Barras de Progresso",
            description: "As barras de progresso indicam o andamento de uma tarefa.",
            examples: [
                { label: "Progresso Básico", code: "<div class='progress-bar progress-bar-primary'><div class='progress' style='width: 70%;'>70%</div></div>" },
                { label: "Progresso com Listras", code: "<div class='progress-bar progress-bar-striped'><div class='progress' style='width: 50%;'>50%</div></div>" },
                { label: "Progresso Animado", code: "<div class='progress-bar progress-bar-animated'><div class='progress' style='width: 30%;'>30%</div></div>" },
                { label: "Progresso com Gradiente", code: "<div class='progress-bar progress-bar-gradient'><div class='progress' style='width: 90%;'>90%</div></div>" },
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



