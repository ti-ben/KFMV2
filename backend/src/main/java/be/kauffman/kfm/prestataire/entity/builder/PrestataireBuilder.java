package be.kauffman.KFM.prestataire.entity.builder;

import be.kauffman.KFM.address.entity.dto.Address;
import be.kauffman.KFM.prestataire.entity.dto.Prestataire;

import java.util.UUID;

public class PrestataireBuilder{
    UUID prestataire_id;
    String name     = "";
    String tel      = "";
    String email    = "";
    String service     = "";
    Address addressList;

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

    public PrestataireBuilder setAddressList(Address addressList) {
        this.addressList = addressList;
        return this;
    }

    public Prestataire build() { return new Prestataire(prestataire_id, name, tel, email, service, addressList);}
}