(function() {
    // Crear el elemento de estilo
    const style = document.createElement('style');
    style.innerHTML = `
        #hosting-suspension-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: #ffffff !important;
            z-index: 2147483647 !important; /* El máximo valor posible */
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            font-family: Arial, sans-serif !important;
            color: #333 !important;
            text-align: center !important;
            padding: 20px !important;
        }
        .error-card {
            max-width: 600px;
            border: 1px solid #ddd;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .error-code { color: #d9534f; font-size: 48px; font-weight: bold; margin-bottom: 10px; }
        .error-msg { font-size: 24px; margin-bottom: 20px; }
        .error-sub { color: #666; line-height: 1.5; }
    `;
    document.head.appendChild(style);

    // Crear el contenido de la ventana
    const overlay = document.createElement('div');
    overlay.id = 'hosting-suspension-overlay';
    overlay.innerHTML = `
        <div class="error-card">
            <div class="error-code">Account Suspended</div>
            <div class="error-msg">Este sitio web no está disponible temporalmente.</div>
            <div class="error-sub">
                El servicio de hosting para  tvlatinomax ha sido pausado.<br>
                Si eres el administrador, por favor contacta al soporte técnico para reactivar el servicio.
            </div>
        </div>
    `;

    // Insertar en el body tan pronto como esté disponible
    if (document.body) {
        document.body.appendChild(overlay);
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(overlay);
        });
    }
})();
