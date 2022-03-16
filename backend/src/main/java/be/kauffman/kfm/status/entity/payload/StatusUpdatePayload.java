package be.kauffman.kfm.status.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatusUpdatePayload {
    UUID status_id;
    String name;
    String description;
}
