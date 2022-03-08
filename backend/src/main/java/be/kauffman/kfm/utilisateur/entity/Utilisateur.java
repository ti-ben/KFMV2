package be.kauffman.KFM.utilisateur.entity;

import be.kauffman.kfm.adresse.entity.Adresse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Utilisateur {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;
    String prenom;
    String nom;
    String genre;
    String avatar;
    Date dte_naissance;
    String email;
    String mdp;
    String telpro;
    String telperso;
    String nationalite;
    String numirn;

    String permis;
    String rang;
    String statut;

    Date cree_le;
    String lieu_naissance;
    String actif;

    @ManyToOne()
    @JoinColumn(name = "site_id_fk", referencedColumnName = "site_id")
    be.kauffman.KFM.site.entity.Site site;

    @OneToOne()
    @JoinColumn(name = "adresse_id_fk", referencedColumnName = "adresse_id")
    Adresse adresseList;
    // Pattern

    public static class UtilisateurBuilder {
        UUID id;
        String prenom = "";
        String nom = "";
        String genre = "";
        String avatar = "";
        Date dte_naissance;
        String email = "";
        String mdp = "";
        String telpro = "";
        String telperso = "";
        String nationalite = "";
        String numirn = "";
        String adresse = "";
        String cp = "";
        String ville = "";
        String permis = "";
        String rang = "";
        String statut = "";
        UUID site_id;
        Date cree_le;
        String lieu_naissance = "";
        String actif = "";
        be.kauffman.KFM.site.entity.Site site;

        public UtilisateurBuilder setid(UUID id) {
            this.id = id;
            return this;
        }

        public UtilisateurBuilder setprenom(String prenom) {
            this.prenom = prenom;
            return this;
        }

        public UtilisateurBuilder setnom(String nom) {
            this.nom = nom;
            return this;
        }

        public UtilisateurBuilder setgenre(String genre) {
            this.genre = genre;
            return this;
        }

        public UtilisateurBuilder setavatar(String avatar) {
            this.avatar = avatar;
            return this;
        }

        public UtilisateurBuilder setdte_naissance(Date dte_naissance) {
            this.dte_naissance = dte_naissance;
            return this;
        }

        public UtilisateurBuilder setemail(String email) {
            this.email = email;
            return this;
        }

        public UtilisateurBuilder setmdp(String mdp) {
            this.mdp = mdp;
            return this;
        }

        public UtilisateurBuilder settelpro(String telpro) {
            this.telpro = telpro;
            return this;
        }

        public UtilisateurBuilder settelperso(String telperso) {
            this.telperso = telperso;
            return this;
        }

        public UtilisateurBuilder setnationalite(String nationalite) {
            this.nationalite = nationalite;
            return this;
        }

        public UtilisateurBuilder setnumirn(String numirn) {
            this.numirn = numirn;
            return this;
        }

        public UtilisateurBuilder setadresse(String adresse) {
            this.adresse = adresse;
            return this;
        }

        public UtilisateurBuilder setcp(String cp) {
            this.cp = cp;
            return this;
        }

        public UtilisateurBuilder setville(String ville) {
            this.ville = ville;
            return this;
        }

        public UtilisateurBuilder setpermis(String permis) {
            this.permis = permis;
            return this;
        }

        public UtilisateurBuilder setrang(String rang) {
            this.rang = rang;
            return this;
        }

        public UtilisateurBuilder setstatut(String statut) {
            this.statut = statut;
            return this;
        }

        public UtilisateurBuilder setSite_id(UUID site_id) {
            this.site_id = site_id;
            return this;
        }

        public UtilisateurBuilder setcree_le(Date cree_le) {
            this.cree_le = cree_le;
            return this;
        }

        public UtilisateurBuilder setlieu_naissance(String lieu_naissance) {
            this.lieu_naissance = lieu_naissance;
            return this;
        }

        public UtilisateurBuilder setactif(String actif) {
            this.actif = actif;
            return this;
        }

        public Utilisateur build() {
            return new Utilisateur(
                    id,
                    prenom,
                    nom,
                    genre,
                    avatar,
                    dte_naissance,
                    email,
                    mdp,
                    telpro,
                    telperso,
                    nationalite,
                    numirn,
                    adresse,
                    cp,
                    ville,
                    permis,
                    rang,
                    statut,
                    site_id,
                    cree_le,
                    lieu_naissance,
                    actif, site
            );
        }
    }
}
