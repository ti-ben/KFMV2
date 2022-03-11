package be.kauffman.kfm.utilisateur.controller;

import be.kauffman.kfm.common.entity.ApiResponse;
import be.kauffman.kfm.utilisateur.entity.Utilisateur;
import be.kauffman.kfm.utilisateur.entity.UtilisateurCreatePayload;
import be.kauffman.kfm.utilisateur.entity.UtilisateurUpdatePayload;
import be.kauffman.kfm.utilisateur.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/utilisateur")
public class UtilisateurController {
    @Autowired
    UtilisateurRepository utilisateurRepository;

    // Create record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody UtilisateurCreatePayload payload){
        Utilisateur newUtilisateur = new Utilisateur.UtilisateurBuilder()
                .setnom(payload.getUtilisateur_nom())
                .setprenom(payload.getUtilisateur_prenom())
                .setgenre(payload.getUtilisateur_genre())
                .setavatar(payload.getUtilisateur_avatar())
                .setdte_naissance(payload.getUtilisateur_dte_naissance())
                .setemail(payload.getUtilisateur_email())
                .setmdp(payload.getUtilisateur_mdp())
                .settelpro(payload.getUtilisateur_telpro())
                .settelperso(payload.getUtilisateur_telperso())
                .setnationalite(payload.getUtilisateur_nationalite())
                .setnumirn(payload.getUtilisateur_numirn())
                .setpermis(payload.getUtilisateur_permis())
                .setcree_le(payload.getUtilisateur_cree_le())
                .setlieu_naissance(payload.getUtilisateur_lieu_naissance())
                .setactif(payload.getUtilisateur_actif())
                .build();
        return new ApiResponse(true, utilisateurRepository.save(newUtilisateur), null);
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get(){
        return new ApiResponse(true,utilisateurRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){
        Utilisateur fromDb = utilisateurRepository.findById(id).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.utilisateur.detail.not-found");
        }
        return new ApiResponse(true,fromDb, null);
    }

    // Update record
    @PostMapping("/update")
    public ApiResponse update(@RequestBody UtilisateurUpdatePayload payload) {
        Utilisateur fromDb = utilisateurRepository.findById(payload.getUtilisateur_id()).orElse(null);
        if(fromDb == null){
            return new ApiResponse(false, null, "api.utilisateur.update.not-found");
        }
        fromDb.setPrenom(payload.getUtilisateur_prenom());
        fromDb.setNom(payload.getUtilisateur_nom());
        return new ApiResponse(true, utilisateurRepository.save(fromDb), null);
    }

    // Delete record
}
