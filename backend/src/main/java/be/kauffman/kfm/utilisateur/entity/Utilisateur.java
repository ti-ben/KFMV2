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
    Date utilisateur_cree_le;
    String utilisateur_lieu_naissance;
    String utilisateur_actif;

    // Pattern

    public static class UtilisateurBuilder{
        UUID utilisateur_id;
        String utilisateur_prenom = "";
        String utilisateur_nom = "";
        String utilisateur_genre = "";
        String utilisateur_avatar = "";
        Date utilisateur_dte_naissance;
        String utilisateur_email = "";
        String utilisateur_mdp = "";
        String utilisateur_telpro = "";
        String utilisateur_telperso = "";
        String utilisateur_nationalite = "";
        String utilisateur_numirn = "";
        String utilisateur_adresse = "";
        String utilisateur_cp = "";
        String utilisateur_ville = "";
        String utilisateur_permis = "";
        String utilisateur_rang = "";
        String utilisateur_statut = "";
        UUID site_id;
        Date utilisateur_cree_le;
        String utilisateur_lieu_naissance = "";
        String utilisateur_actif = "";

        public UtilisateurBuilder setUtilisateur_id(UUID utilisateur_id) {
            this.utilisateur_id = utilisateur_id;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_prenom(String utilisateur_prenom) {
            this.utilisateur_prenom = utilisateur_prenom;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_nom(String utilisateur_nom) {
            this.utilisateur_nom = utilisateur_nom;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_genre(String utilisateur_genre) {
            this.utilisateur_genre = utilisateur_genre;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_avatar(String utilisateur_avatar) {
            this.utilisateur_avatar = utilisateur_avatar;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_dte_naissance(Date utilisateur_dte_naissance) {
            this.utilisateur_dte_naissance = utilisateur_dte_naissance;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_email(String utilisateur_email) {
            this.utilisateur_email = utilisateur_email;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_mdp(String utilisateur_mdp) {
            this.utilisateur_mdp = utilisateur_mdp;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_telpro(String utilisateur_telpro) {
            this.utilisateur_telpro = utilisateur_telpro;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_telperso(String utilisateur_telperso) {
            this.utilisateur_telperso = utilisateur_telperso;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_nationalite(String utilisateur_nationalite) {
            this.utilisateur_nationalite = utilisateur_nationalite;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_numirn(String utilisateur_numirn) {
            this.utilisateur_numirn = utilisateur_numirn;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_adresse(String utilisateur_adresse) {
            this.utilisateur_adresse = utilisateur_adresse;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_cp(String utilisateur_cp) {
            this.utilisateur_cp = utilisateur_cp;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_ville(String utilisateur_ville) {
            this.utilisateur_ville = utilisateur_ville;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_permis(String utilisateur_permis) {
            this.utilisateur_permis = utilisateur_permis;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_rang(String utilisateur_rang) {
            this.utilisateur_rang = utilisateur_rang;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_statut(String utilisateur_statut) {
            this.utilisateur_statut = utilisateur_statut;
            return this;
        }

        public UtilisateurBuilder setSite_id(UUID site_id) {
            this.site_id = site_id;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_cree_le(Date utilisateur_cree_le) {
            this.utilisateur_cree_le = utilisateur_cree_le;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_lieu_naissance(String utilisateur_lieu_naissance) {
            this.utilisateur_lieu_naissance = utilisateur_lieu_naissance;
            return this;
        }

        public UtilisateurBuilder setUtilisateur_actif(String utilisateur_actif) {
            this.utilisateur_actif = utilisateur_actif;
            return this;
        }
        public Utilisateur build() { return new Utilisateur(
                utilisateur_id,
                utilisateur_prenom,
                utilisateur_nom,
                utilisateur_genre,
                utilisateur_avatar,
                utilisateur_dte_naissance,
                utilisateur_email,
                utilisateur_mdp,
                utilisateur_telpro,
                utilisateur_telperso,
                utilisateur_nationalite,
                utilisateur_numirn,
                utilisateur_adresse,
                utilisateur_cp,
                utilisateur_ville,
                utilisateur_permis,
                utilisateur_rang,
                utilisateur_statut,
                site_id,
                utilisateur_cree_le,
                utilisateur_lieu_naissance,
                utilisateur_actif
        ); }
    }
}
