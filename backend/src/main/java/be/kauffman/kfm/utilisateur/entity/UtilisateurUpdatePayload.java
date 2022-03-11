package be.kauffman.kfm.utilisateur.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UtilisateurUpdatePayload {
    UUID utilisateur_id;
    String utilisateur_prenom;
    String utilisateur_nom;
    String utilisateur_genre;
    String utilisateur_avatar;
    Date utilisateur_dte_naissance;
    String utilisateur_email;
    String utilisateur_mdp;
    String utilisateur_telpro;
    String utilisateur_telperso;
    String utilisateur_nationalite;
    String utilisateur_numirn;
    String utilisateur_adresse;
    String utilisateur_cp;
    String utilisateur_ville;
    String utilisateur_permis;
    String utilisateur_rang;
    String utilisateur_statut;
    UUID site_id;
    Date utilisateur_cree_le;
    String utilisateur_lieu_naissance;
    String utilisateur_actif;
}
