$(document).ready(function() {
    const projectData = {
      "projeto1": {
        "title": "Estande para Feira MIA - Master Injector Academy",
        "image": "assets/works (4).jpg",
        "description": "Descrição do Projeto 1..."
      },
      // Adicione mais projetos conforme necessário
    };

    // Intercepta cliques nos links dos projetos
    $("a[id^='projeto']").on("click", function(e) {
      e.preventDefault();
      const projectId = $(this).attr("id");
      if (projectData[projectId]) {
        const project = projectData[projectId];
        $("#project-title").text(project.title);
        $("#project-image").attr("src", project.image);
        $("#project-description").text(project.description);

        // Atualiza a URL para permitir compartilhar links dos projetos
        history.pushState(null, null, `?id=${projectId}`);
      } else {
        $("#project-title").text("Projeto não encontrado");
        $("#project-image").attr("src", "");
        $("#project-description").text("");
      }
    });

    // Verifica a URL atual ao carregar a página para exibir o projeto correto
    $(window).on("load", function() {
      const urlParams = new URLSearchParams(window.location.search);
      const projectId = urlParams.get('id');
      if (projectId && projectData[projectId]) {
        const project = projectData[projectId];
        $("#project-title").text(project.title);
        $("#project-image").attr("src", project.image);
        $("#project-description").text(project.description);
      } else {
        $("#project-title").text("Projeto não encontrado");
        $("#project-image").attr("src", "");
        $("#project-description").text("");
      }
    });
  });