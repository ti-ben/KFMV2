package be.kauffman.kfm.modules.status.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatusCreatePayload {
    String name;
    String description;
    String active;
}
