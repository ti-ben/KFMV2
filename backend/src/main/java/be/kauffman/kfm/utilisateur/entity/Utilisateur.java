package be.kauffman.KFM.utilisateur.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Utilisateur {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "utilisateur_id", updatable = false, nullable = false)
    private UUID utilisateur_id;
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
    private UUID site_id;
    String utilisateur_cree_le;
    String utilisateur_lieu_naissance;
    String utilisateur_actif;
}
