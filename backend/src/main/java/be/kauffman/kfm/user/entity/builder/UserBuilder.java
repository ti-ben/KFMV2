package be.kauffman.kfm.user.entity.builder;

import be.kauffman.kfm.status.entity.dto.Status;
import be.kauffman.kfm.user.entity.dto.User;
import be.kauffman.kfm.site.entity.dto.Site;
import be.kauffman.kfm.address.entity.dto.Address;
import be.kauffman.kfm.grade.entity.dto.Grade;

import java.util.Date;
import java.util.UUID;

public class UserBuilder {
    UUID user_id;
    String firstname;
    String lastname;
    String gender;
    String avatar;
    Date dob;
    String email;
    String password;
    String telpro;
    String telperso;
    String nationality;
    String numirn;
    String driver_license;
    Date created_on;
    String pob;
    String active;
    Site site;
    Address addressList;
    Grade grade;
    Status status;

        public UserBuilder setUser_id(UUID user_id) {
            this.user_id = user_id;
            return this;
        }

        public UserBuilder setFirstname(String firstname) {
            this.firstname = firstname;
            return this;
        }

        public UserBuilder setLastname(String lastname) {
            this.lastname = lastname;
            return this;
        }

        public UserBuilder setGender(String gender) {
            this.gender = gender;
            return this;
        }

        public UserBuilder setAvatar(String avatar) {
            this.avatar = avatar;
            return this;
        }

        public UserBuilder setDob(Date dob) {
            this.dob = dob;
            return this;
        }

        public UserBuilder setEmail(String email) {
            this.email = email;
            return this;
        }

        public UserBuilder setPassword(String password) {
            this.password = password;
            return this;
        }

        public UserBuilder setTelpro(String telpro) {
            this.telpro = telpro;
            return this;
        }

        public UserBuilder setTelperso(String telperso) {
            this.telperso = telperso;
            return this;
        }

        public UserBuilder setNationality(String nationality) {
            this.nationality = nationality;
            return this;
        }

        public UserBuilder setNumirn(String numirn) {
            this.numirn = numirn;
            return this;
        }

        public UserBuilder setDriver_license(String driver_license) {
            this.driver_license = driver_license;
            return this;
        }

        public UserBuilder setCreated_on(Date created_on) {
            this.created_on = created_on;
            return this;
        }

        public UserBuilder setPob(String pob) {
            this.pob = pob;
            return this;
        }

        public UserBuilder setActive(String active) {
            this.active = active;
            return this;
        }

        public UserBuilder setSite(Site site) {
            this.site = site;
            return this;
        }

        public UserBuilder setAddressList(Address addressList) {
            this.addressList = addressList;
            return this;
        }

        public UserBuilder setGrade(Grade grade) {
            this.grade = grade;
            return this;
        }

        public UserBuilder setStatus(Status status) {
            this.status = status;
            return this;
        }

        public User build() { return new User(user_id, firstname, lastname, gender, avatar, dob, email, password, telpro, telperso, nationality, numirn, driver_license, created_on, pob, active, site, addressList, grade, status); }

}
