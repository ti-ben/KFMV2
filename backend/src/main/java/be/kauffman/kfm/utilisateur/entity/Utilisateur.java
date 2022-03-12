package be.kauffman.kfm.utilisateur.entity;

import be.kauffman.kfm.site.entity.Site;
import be.kauffman.kfm.address.entity.Adresse;
import be.kauffman.kfm.rang.entity.Rang;
import be.kauffman.kfm.statut.entity.Statut;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Utilisateur {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
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
    Date cree_le;
    String lieu_naissance;
    String actif;

    @ManyToOne()
    @JoinColumn(name = "site_id_fk", referencedColumnName = "site_id")
    Site site;

    @OneToOne()
    @JoinColumn(name = "adresse_id_fk", referencedColumnName = "adresse_id")
    Adresse adresseList;

    @ManyToOne()
    @JoinColumn(name = "rang_id_fk", referencedColumnName = "rang_id")
    Rang rang;

    @ManyToOne()
    @JoinColumn(name = "statut_id_fk", referencedColumnName = "statut_id")
    Statut statut;


//    @OneToMany()
//    @JoinColumn(name = "utilisateur_id_fk", referencedColumnName = "utilisateur_id")
//    Uselectmedrdv uselectmedrdv;

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
        String permis = "";
        Date cree_le;
        String lieu_naissance = "";
        String actif = "";
        Site site;
        Adresse adresseList;
        Rang rang;
        Statut statut;

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

        public UtilisateurBuilder setpermis(String permis) {
            this.permis = permis;
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

        public UtilisateurBuilder setSite(Site site) {
            this.site = site;
            return this;
        }

        public UtilisateurBuilder setAdresseList(Adresse adresseList) {
            this.adresseList = adresseList;
            return this;
        }

        public UtilisateurBuilder setRang(Rang rang) {
            this.rang = rang;
            return this;
        }

        public UtilisateurBuilder setStatut(Statut statut) {
            this.statut = statut;
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
                    permis,
                    cree_le,
                    lieu_naissance,
                    actif,
                    site,
                    adresseList,
                    rang,
                    statut
            );
        }
    }
}