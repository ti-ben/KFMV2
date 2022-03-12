package be.kauffman.kfm.rang.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RangCreatePayload {
    String comment;
    String name;
}
