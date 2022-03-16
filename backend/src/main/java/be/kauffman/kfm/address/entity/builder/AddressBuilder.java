package be.kauffman.kfm.address.entity.builder;
import be.kauffman.kfm.address.entity.dto.Address;

import java.util.UUID;

public class AddressBuilder {
        UUID address_id;
        String road;
        String cp;
        String town;
        String country;
        String num;

        public AddressBuilder setAddress_id(UUID address_id) {
            this.address_id = address_id;
            return this;
        }

        public AddressBuilder setRoad(String road) {
            this.road = road;
            return this;
        }

        public AddressBuilder setCp(String cp) {
            this.cp = cp;
            return this;
        }

        public AddressBuilder setTown(String town) {
            this.town = town;
            return this;
        }

        public AddressBuilder setCountry(String country) {
            this.country = country;
            return this;
        }

        public AddressBuilder setNum(String num) {
            this.num = num;
            return this;
        }

        public Address build() { return new Address(address_id, road, cp, town, country, num); }
}
