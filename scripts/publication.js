$(document).ready(function(){

    // Modal
    
    $(".modal").on("click", function (e) {
        console.log(e);
        if (($(e.target).hasClass("modal-main") || $(e.target).hasClass("close-modal")) && $("#loading").css("display") == "none") {
            closeModal();
        }
    });
    
    // -> Modal
    
    // Abrir el inspector de archivos
    
    $(document).on("click", "#add-photo", function(){
        $("#add-new-photo").click();
    });
    
    // -> Abrir el inspector de archivos
    
    // Cachamos el evento change
    
    $(document).on("change", "#add-new-photo", function () {
    
        console.log(this.files);
        var files = this.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png", "image/gif"];
        var seEncontraronElementoNoValidos = false;
    
        for (var i = 0; i < files.length; i++) {
            element = files[i];
            
            if (supportedImages.indexOf(element.type) != -1) {
                createPreview(element);
            }
            else {
                seEncontraronElementoNoValidos = true;
            }
        }
    
        if (seEncontraronElementoNoValidos) {
            showMessage("Se encontraron archivos no validos.");
        }
        else {
            showMessage("Todos los archivos se subieron correctamente.");
        }
    
    });
    
    // -> Cachamos el evento change
    
    // Eliminar previsualizaciones
    
    $(document).on("click", "#Images .image-container", function(e){
        $(this).parent().remove();
    });
    
    // -> Eliminar previsualizaciones
    
    });
    
    
    function showModal(card) {
      $("#" + card).show();
      $(".modal").addClass("show");
    }
    
    function closeModal() {
      $(".modal").removeClass("show");
      setTimeout(function () {
        $(".modal .modal-card").hide();
      }, 300);
    }
    
    function loading(status, tag) {
      if (status) {
        $("#loading .tag").text(tag);
        showModal("loading");
      }
      else {
        closeModal();
      }
    }
    
    function showMessage(message) {
      $("#Message .tag").text(message);
      showModal("Message");
    }
    
    
    //Genera las previsualizaciones
    function createPreview(file) {
      var imgCodified = URL.createObjectURL(file);
      var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12"><div class="image-container"> <figure> <img src="' + imgCodified + '" alt="Foto del usuario"> <figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div></div>');
      $(img).insertBefore("#add-photo-container");
    }