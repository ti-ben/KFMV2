package be.kauffman.kfm.modules.prestataire.entity.builder;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import be.kauffman.kfm.modules.prestataire.entity.dto.Prestataire;

import java.util.UUID;

public class PrestataireBuilder {
    UUID prestataire_id;
    String name = "";
    String tel = "";
    String email = "";
    String service = "";
    String active = "";
    Address address;

    public PrestataireBuilder setPrestataire_id(UUID prestataire_id) {
        this.prestataire_id = prestataire_id;
        return this;
    }

    public PrestataireBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public PrestataireBuilder setTel(String tel) {
        this.tel = tel;
        return this;
    }

    public PrestataireBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public PrestataireBuilder setService(String service) {
        this.service = service;
        return this;
    }

    public PrestataireBuilder setActive(String active) {
        this.active = active;
        return this;
    }

    public PrestataireBuilder setAddress(Address address) {
        this.address = address;
        return this;
    }

    public Prestataire build() {
        return new Prestataire(prestataire_id, name, tel, email, service, active, address);
    }
}