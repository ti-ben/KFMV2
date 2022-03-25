package be.kauffman.kfm.modules.site.entity.builder;

import be.kauffman.kfm.modules.address.entity.dto.Address;
import be.kauffman.kfm.modules.site.entity.dto.Site;

import java.util.Date;
import java.util.UUID;

    public class SiteBuilder{
        UUID site_id;
        String name = "Pas de nom de site";
        String description = "pas de description";
        Date created_on = new Date();
        Address addressList;

        public SiteBuilder setSite_id(UUID site_id) {
            this.site_id = site_id;
            return this;
        }

        public SiteBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public SiteBuilder setDescription(String description) {
            this.description = description;
            return this;
        }

        public SiteBuilder setCreated_on(Date created_on) {
            this.created_on = created_on;
            return this;
        }

        public SiteBuilder setAddressList(Address addressList) {
            this.addressList = addressList;
            return this;
        }
        public Site build() { return new Site(site_id, name, description, created_on, addressList); }
    }

