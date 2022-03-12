package be.kauffman.kfm.rang.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RangUpdatePayload {
    UUID rang_id;
    String comment;
    String name;
}
