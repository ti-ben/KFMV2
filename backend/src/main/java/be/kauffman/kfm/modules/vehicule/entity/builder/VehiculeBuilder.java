package be.kauffman.kfm.modules.vehicule.entity.builder;
import be.kauffman.kfm.modules.numberplate.entity.dto.Numberplate;
import be.kauffman.kfm.modules.site.entity.builder.SiteBuilder;
import be.kauffman.kfm.modules.site.entity.dto.Site;
import be.kauffman.kfm.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class VehiculeBuilder{
    UUID vehicule_id;
    Date dop;
    Boolean active;
    String price;
    String num_chassis;
    String brand;
    String cde_carrosserie;
    String genre;
    String mom;
    String mma;
    String mmat;
    String mta;
    String classe_enviro;
    String nbr_km;
    String metrologie;
    String picture;
    String fuel;
    String type;
    Numberplate numberplate;
    Site site;

    public VehiculeBuilder setVehicule_id(UUID vehicule_id) {
        this.vehicule_id = vehicule_id;
        return this;
    }

    public VehiculeBuilder setDop(Date dop) {
        this.dop = dop;
        return this;
    }

    public VehiculeBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public VehiculeBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public VehiculeBuilder setNum_chassis(String num_chassis) {
        this.num_chassis = num_chassis;
        return this;
    }

    public VehiculeBuilder setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    public VehiculeBuilder setCde_carrosserie(String cde_carrosserie) {
        this.cde_carrosserie = cde_carrosserie;
        return this;
    }

    public VehiculeBuilder setGenre(String genre) {
        this.genre = genre;
        return this;
    }

    public VehiculeBuilder setMom(String mom) {
        this.mom = mom;
        return this;
    }

    public VehiculeBuilder setMma(String mma) {
        this.mma = mma;
        return this;
    }

    public VehiculeBuilder setMmat(String mmat) {
        this.mmat = mmat;
        return this;
    }

    public VehiculeBuilder setMta(String mta) {
        this.mta = mta;
        return this;
    }

    public VehiculeBuilder setClasse_enviro(String classe_enviro) {
        this.classe_enviro = classe_enviro;
        return this;
    }

    public VehiculeBuilder setNbr_km(String nbr_km) {
        this.nbr_km = nbr_km;
        return this;
    }

    public VehiculeBuilder setMetrologie(String metrologie) {
        this.metrologie = metrologie;
        return this;
    }

    public VehiculeBuilder setPicture(String picture) {
        this.picture = picture;
        return this;
    }

    public VehiculeBuilder setFuel(String fuel) {
        this.fuel = fuel;
        return this;
    }

    public VehiculeBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public VehiculeBuilder SetNumberplate(Numberplate numberplate) {
        this.numberplate = numberplate;
        return this;
    }

    public VehiculeBuilder SetSite(Site site) {
        this.site = site;
        return this;
    }

    public Vehicule build() { return new Vehicule(vehicule_id, dop, active,price, num_chassis, brand, cde_carrosserie,genre, mom, mma, mmat,mta, classe_enviro, nbr_km, metrologie, picture, fuel, type, numberplate, site); }
}