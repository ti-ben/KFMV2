package be.kauffman.kfm.modules.status.entity.builder;

import be.kauffman.kfm.modules.status.entity.dto.Status;

import java.util.UUID;

    public class StatusBuilder{
        UUID status_id;
        String name = "";
        String description = "";
        String active = "";

        public StatusBuilder setStatus_id(UUID status_id) {
            this.status_id = status_id;
            return this;
        }

        public StatusBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public StatusBuilder setDescription(String description) {
            this.description = description;
            return this;
        }

        public StatusBuilder setActive(String active) {
            this.active = active;
            return this;
        }

        public Status build() { return new Status(status_id, name, description, active); }
    }

