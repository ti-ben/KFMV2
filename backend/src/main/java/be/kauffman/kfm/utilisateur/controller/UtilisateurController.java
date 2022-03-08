package be.kauffman.KFM.utilisateur.controller;

import be.kauffman.KFM.common.entity.ApiResponse;
import be.kauffman.KFM.utilisateur.entity.Utilisateur;
import be.kauffman.KFM.utilisateur.entity.UtilisateurCreatePayload;
import be.kauffman.KFM.utilisateur.entity.UtilisateurUpdatePayload;
import be.kauffman.KFM.utilisateur.repository.UtilisateurRepository;
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
                .setUtilisateur_nom(payload.getUtilisateur_nom())
                .setUtilisateur_prenom(payload.getUtilisateur_prenom())
                .setUtilisateur_genre(payload.getUtilisateur_genre())
                .setUtilisateur_avatar(payload.getUtilisateur_avatar())
                .setUtilisateur_dte_naissance(payload.getUtilisateur_dte_naissance())
                .setUtilisateur_email(payload.getUtilisateur_email())
                .setUtilisateur_mdp(payload.getUtilisateur_mdp())
                .setUtilisateur_telpro(payload.getUtilisateur_telpro())
                .setUtilisateur_telperso(payload.getUtilisateur_telperso())
                .setUtilisateur_nationalite(payload.getUtilisateur_nationalite())
                .setUtilisateur_numirn(payload.getUtilisateur_numirn())
                .setUtilisateur_adresse(payload.getUtilisateur_adresse())
                .setUtilisateur_cp(payload.getUtilisateur_cp())
                .setUtilisateur_ville(payload.getUtilisateur_ville())
                .setUtilisateur_permis(payload.getUtilisateur_permis())
                .setUtilisateur_rang(payload.getUtilisateur_rang())
                .setUtilisateur_statut(payload.getUtilisateur_statut())
                .setSite_id(payload.getSite_id())
                .setUtilisateur_cree_le(payload.getUtilisateur_cree_le())
                .setUtilisateur_lieu_naissance(payload.getUtilisateur_lieu_naissance())
                .setUtilisateur_actif(payload.getUtilisateur_actif())
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
        fromDb.setUtilisateur_prenom(payload.getUtilisateur_prenom());
        fromDb.setUtilisateur_nom(payload.getUtilisateur_nom());
        return new ApiResponse(true, utilisateurRepository.save(fromDb), null);
    }

    // Delete record
}
